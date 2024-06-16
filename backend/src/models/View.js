const mongoose = require('mongoose');

const viewSchema = new mongoose.Schema({
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('View', viewSchema);
