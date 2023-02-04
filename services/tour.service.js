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

exports.createTourService = async (data) => {
    const tour = await Tours.create(data)
    return tour;
}