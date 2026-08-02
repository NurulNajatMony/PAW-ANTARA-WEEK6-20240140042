/**
 * Protects routes by checking for a valid authentication cookie.
 *
 * @param {Object} req - The Express request object.
 * @param {Object} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */
const authMiddleware = (req, res, next) => {
  const token = req.cookies.auth_token;

  if (!token) {
    return res.redirect("/login");
  }

  try {
    const decoded = Buffer.from(token, 'base64').toString('ascii');
    req.user = JSON.parse(decoded);
    next();
  } catch (error) {
    return res.redirect("/login");
  }
};

module.exports = authMiddleware;
