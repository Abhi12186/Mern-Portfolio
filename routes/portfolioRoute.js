const express = require('express');
const sendEmailController = require('../controllers/portfolioController');  // ✅ FIXED

// router object
const router = express.Router();

// routes
router.post('/sendEmail', sendEmailController);  // ✅ CORRECT USAGE

// export
module.exports = router;
