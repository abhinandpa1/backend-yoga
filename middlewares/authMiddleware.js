const { verifyToken } = require('../utils/tokenUtils');  // Import JWT utility

// Middleware to protect routes
const protect = (req, res, next) => {
  let token;

  // Check if token is in the request headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get the token from the Authorization header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = verifyToken(token);

      // If token is valid, add user ID to the request object
      if (!decoded) {
        return res.status(401).json({ message: 'Invalid token' });
      }

      req.user = decoded.id;
      next(); // Proceed to the next middleware/route handler
    } catch (error) {
      res.status(401).json({ message: 'Not authorized' });
    }
  }

  // If no token is provided
  if (!token) {
    res.status(401).json({ message: 'No token, authorization denied' });
  }
};

module.exports = protect;
