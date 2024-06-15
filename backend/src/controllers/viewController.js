// controllers/viewController.js
const View = require('../models/View');

const getViewCount = async (req, res) => {
  try {
    const view = await View.findOne();
    res.status(200).json({ totalViews: view ? view.count : 0 });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get view count', error: error.message });
  }
};

const incrementViewCount = async (req, res) => {
  try {
    const view = await View.findOneAndUpdate({}, { $inc: { count: 1 } }, { new: true, upsert: true });
    res.status(200).json({ totalViews: view.count });
  } catch (error) {
    res.status(500).json({ message: 'Failed to increment view count', error: error.message });
  }
};

module.exports = { getViewCount, incrementViewCount };
