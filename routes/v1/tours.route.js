const express = require('express');
const router = express.Router();
const tourController = require('../../controllers/tour.controller');


router.route('/')
    .get(tourController.getTourPlan)
    .post(tourController.createTour)

router.route('/:id')
    .get(tourController.getTourById)
    .patch(tourController.updateTourPlan)


module.exports = router;