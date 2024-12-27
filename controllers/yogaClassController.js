const YogaClass = require('../models/YogaClass');

// Create Yoga Class
exports.createClass = async (req, res) => {
  const { title, description, instructor, date } = req.body;

  try {
    const newClass = new YogaClass({ title, description, instructor, date });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get All Classes
exports.getClasses = async (req, res) => {
  try {
    const classes = await YogaClass.find();
    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Yoga Class
exports.updateClass = async (req, res) => {
  const { title, description, instructor, date } = req.body;

  try {
    const yogaClass = await YogaClass.findById(req.params.id);
    if (!yogaClass) return res.status(404).json({ message: 'Class not found' });

    yogaClass.title = title || yogaClass.title;
    yogaClass.description = description || yogaClass.description;
    yogaClass.instructor = instructor || yogaClass.instructor;
    yogaClass.date = date || yogaClass.date;

    await yogaClass.save();
    res.status(200).json(yogaClass);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete Yoga Class
exports.deleteClass = async (req, res) => {
  try {
    const yogaClass = await YogaClass.findById(req.params.id);
    if (!yogaClass) return res.status(404).json({ message: 'Class not found' });

    await yogaClass.remove();
    res.status(200).json({ message: 'Class deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
