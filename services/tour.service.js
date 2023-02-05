const Tours = require("../models/Tours")

exports.getTourPlanService = async (filters, quires) => {
    console.log(filters)
    const tour = await Tours.find(filters)
        .skip(quires.skip)
        .limit(quires.limitBy)
        .select(quires.fields)
        .sort(quires.sortBy)
    const totalTours = await Tours.countDocuments(quires);
    const totalPage = Math.ceil(totalTours / quires.limit);
    return { totalTours, totalPage, tour };
}

exports.getTourByIdService = async (id) => {
    // console.log(id)
    const result = await Tours.findById(id)
    return result;
}

exports.getTrendingTourService = async () => {
    // console.log(id)
    const result = await Tours.find().sort({ viewCount: -1 }).limit(3)
    return result;
}

exports.getCheapestTourService = async () => {
    // console.log(id)
    const result = await Tours.find({}).sort({ price: 1 }).limit(3)
    return result;
}

exports.createTourService = async (data) => {
    const tour = await Tours.create(data)
    return tour;
}

exports.updateTourPlanService = async (id, body) => {
    const result = await Tours.updateOne({ _id: id }, { $set: body }, { runValidators: true })
    return result;
}