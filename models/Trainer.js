const mongoose = require('mongoose');

const trainerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Trainer name is required'],
  },
  expertise: {
    type: String,
    required: [true, 'Trainer expertise is required'],
  },
  bio: {
    type: String,
    required: [true, 'Trainer bio is required'],
  },
});

module.exports = mongoose.model('Trainer', trainerSchema);
