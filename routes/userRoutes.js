const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');
const protect = require('../middlewares/authMiddleware');

// Register user route
router.post('/register', registerUser);

// Login user route
router.post('/login', loginUser);

// Example of a protected route
router.get('/profile', protect, (req, res) => {
  res.json({ message: 'Protected user profile', userId: req.user });
});

module.exports = router;


