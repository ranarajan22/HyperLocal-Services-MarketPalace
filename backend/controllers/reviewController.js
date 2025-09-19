const Review = require('../models/Review');

exports.createReview = async (req, res) => {
    const { service, rating, comment } = req.body;
    const review = new Review({ user: req.user.id, service, rating, comment });
    await review.save();
    res.status(201).json(review);
};

exports.getReviews = async (req, res) => {
    const reviews = await Review.find({ service: req.params.serviceId }).populate('user');
    res.json(reviews);
};
