const users = [
  { username: "admin", password: "12345678", role: "admin" },
  { username: "user", password: "user123", role: "user" }
];

/**
 * Validates user login credentials and returns user data if valid.
 *
 * @param {string} username - The provided username.
 * @param {string} password - The provided password.
 * @returns {Object|null} User object if credentials are valid, null otherwise.
 */
const loginUser = (username, password) => {
  const user = users.find(u => u.username === username && u.password === password);
  return user || null;
};

module.exports = { loginUser };
