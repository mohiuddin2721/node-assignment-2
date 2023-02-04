const {createTourService} = require('../services/tour.service');

exports.createTour = async (req, res) => {
    try {
        const result = await createTourService(req.body)
        result.logger()

        res.status(200).json({
            status: 'Success',
            message: 'Data inserted successfully!',
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not inserted',
            error: error.message
        })
    }
}