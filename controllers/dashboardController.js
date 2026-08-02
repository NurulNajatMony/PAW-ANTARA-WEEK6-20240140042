/**
 * Render the authenticated dashboard page.
 *
 * @param {Object} req - Express request object.
 * @param {Object} res - Express response object.
 * @returns {void}
 */
const renderDashboard = (req, res) => {
  res.render("dashboard", { user: req.user });
};

module.exports = {
  renderDashboard,
};
