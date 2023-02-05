const Tours = require('../models/Tours');

exports.viewCount = async (id) => {
    const increaseViewCount = await Tours.updateOne({ _id: id }, { $inc: { viewCount: 1 } })
}