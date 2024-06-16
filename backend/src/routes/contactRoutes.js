const express = require('express');
const { addContact, getContacts } = require('../controllers/contactController');
const { protect, admin } = require('../middleware/auth');

const router = express.Router();

router.post('/', addContact);
router.get('/', protect, admin, getContacts);

module.exports = router;
