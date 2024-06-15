// middleware/viewTracker.js
const View = require('../models/View');

const trackViews = async (req, res, next) => {
  try {
    await View.findOneAndUpdate({}, { $inc: { count: 1 } }, { new: true, upsert: true });
    next();
  } catch (error) {
    console.error('Failed to track view:', error.message);
    next();
  }
};

module.exports = trackViews;
