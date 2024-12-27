const mongoose = require('mongoose');

const yogaClassSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Class title is required'],
  },
  description: {
    type: String,
    required: [true, 'Class description is required'],
  },
  duration: {
    type: Number, // in minutes
    required: [true, 'Class duration is required'],
  },
  trainer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trainer',
    required: true,
  },
  date: {
    type: Date,
    required: [true, 'Class date is required'],
  },
});

module.exports = mongoose.model('YogaClass', yogaClassSchema);
