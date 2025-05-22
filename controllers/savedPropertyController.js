
const SavedProperty = require('../models/SavedProperty');

exports.saveProperty = async (req, res) => {
  const { userId, propertyId } = req.body;

  try {
    const saved = new SavedProperty({ user: userId, property: propertyId });
    await saved.save();
    res.status(201).json({ message: 'Property saved!' });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Property already saved' });
    }
    res.status(500).json({ error: error.message });
  }
};

exports.unsaveProperty = async (req, res) => {
  const { userId, propertyId } = req.body;

  try {
    await SavedProperty.findOneAndDelete({ user: userId, property: propertyId });
    res.json({ message: 'Property unsaved' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSavedProperties = async (req, res) => {
  const { userId } = req.params;

  try {
    const saved = await SavedProperty.find({ user: userId }).populate('property');
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
