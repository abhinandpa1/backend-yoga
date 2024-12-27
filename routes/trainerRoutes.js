const express = require('express');
const { addTrainer, getTrainers } = require('../controllers/trainerController');
const router = express.Router();

router.post('/add', addTrainer);
router.get('/', getTrainers);

module.exports = router;
