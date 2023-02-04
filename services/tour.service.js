const Tours = require("../models/Tours")

exports.createTourService = async (data) => {
    const tour = await Tours.create(data)
    return tour;
}