const express = require('express');
const { createYogaClass, getYogaClasses } = require('../controllers/yogaClassController');
const router = express.Router();

router.post('/add', createYogaClass);
router.get('/', getYogaClasses);

module.exports = router;
