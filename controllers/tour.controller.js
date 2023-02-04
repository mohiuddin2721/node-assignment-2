const {
    createTourService,
    getTourPlanService,
    getTourByIdService,
    updateTourPlanService,
    getCheapestTourService
} = require('../services/tour.service');

exports.getTourPlan = async (req, res) => {
    try {
        let filters = { ...req.query }
        const excludeQuery = ['page', 'limit', 'sort']
        excludeQuery.forEach(field => delete filters[field])
        // console.log('Original query: ', req.query)
        // console.log('filters query: ', filters)

        const quires = {}

        if (req.query.sort) {
            const sortBy = req.query.sort.split(',').join(' ')
            quires.sortBy = sortBy;
        }
        if (req.query.limit) {
            const limitBy = Number(req.query.limit)
            quires.limitBy = limitBy;
        }

        if (req.query.fields) {
            const fields = req.query.fields.split(',').join(' ')
            quires.fields = fields;
        }

        if (req.query.page) {
            const { page = 1, limit = 6 } = req.query;
            const skip = (page - 1) * Number(limit);
            quires.skip = skip;
            quires.limit = Number(limit);
        }

        const result = await getTourPlanService(filters, quires)
        res.status(200).json({
            status: 'Success',
            message: 'Data founded!',
            data: result
        })
    } catch {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not found',
            error: error.message
        })
    }
}

exports.getTourById = async (req, res) => {
    try {
        const result = await getTourByIdService(req.params.id)
        res.status(200).json({
            status: 'Success',
            message: 'Data founded!',
            data: result
        })
    } catch {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not found',
            error: error.message
        })
    }
}

exports.getCheapestTour = async (req, res) => {
    try {
        const result = await getCheapestTourService()
        res.status(200).json({
            status: 'Success',
            message: 'Get cheapest tour!',
            data: result
        })
    } catch {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not updated',
            error: error.message
        })
    }
}

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

exports.updateTourPlan = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await updateTourPlanService(id, req.body)
        res.status(200).json({
            status: 'Success',
            message: 'Data updated successfully!',
            data: result
        })
    } catch {
        res.status(400).json({
            status: 'fail',
            message: 'Data is not updated',
            error: error.message
        })
    }
}