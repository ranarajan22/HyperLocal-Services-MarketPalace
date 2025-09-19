const express = require('express');
const { createReview, getReviews } = require('../controllers/reviewController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createReview);
router.get('/:serviceId', getReviews);

module.exports = router;
