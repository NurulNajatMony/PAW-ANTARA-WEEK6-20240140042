/**
 * Role-Based Access Control Middleware.
 * Checks if the authenticated user has one of the allowed roles.
 *
 * @param {string[]} allowedRoles - Array of roles allowed to access the route.
 * @returns {Function} Middleware function.
 */
const rbacMiddleware = (allowedRoles) => {
  return (req, res, next) => {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      return res.status(403).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Access Denied</title>
          <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="min-h-screen bg-slate-50 flex items-center justify-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold text-rose-600 mb-4">403 - Access Denied</h1>
            <p class="text-slate-600 mb-6">You do not have permission to view this page.</p>
            <a href="/dashboard" class="rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:text-sky-600">Back to Dashboard</a>
          </div>
        </body>
        </html>
      `);
    }
    next();
  };
};

module.exports = rbacMiddleware;
