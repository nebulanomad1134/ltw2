const express = require('express');
const { getViewCount, incrementViewCount } = require('../controllers/viewController');

const router = express.Router();

router.get('/', getViewCount);
router.post('/', incrementViewCount);

module.exports = router;
