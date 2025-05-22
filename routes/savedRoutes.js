
const express = require('express');
const router = express.Router();
const { saveProperty, unsaveProperty, getSavedProperties } = require('../controllers/savedPropertyController');

router.post('/save', saveProperty);
router.delete('/unsave', unsaveProperty);
router.get('/:userId', getSavedProperties);

module.exports = router;
