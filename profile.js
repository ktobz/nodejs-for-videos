const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, profileController.createProfile);

module.exports = router;
