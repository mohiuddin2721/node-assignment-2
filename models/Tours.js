const mongoose = require('mongoose');

// schema design
const tourSchema = mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title name"],
        unique: [true, "Name must be unique"],
        trim: true,
        minLength: [6, "Title must be at least 3 characters."],
        maxLength: [300, "Title is too large."]
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true
                } else {
                    return false
                }
            }
        }
    },
    location: {
        type: String,
        required: [true, "Please Provide a location name"]
    },
    day: {
        type: Number,
        required: [true, "Please mention days"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true
                } else {
                    return false
                }
            }
        },
        message: "Day must be an integer"
    },
    night: {
        type: Number,
        required: [true, "Please mention night"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true
                } else {
                    return false
                }
            }
        },
        message: "Night must be an integer"
    },
    tourIncluded: {
        type: String,
        required: true,
        minLength: [15, "Tour included must be at least 15 characters."],
        maxLength: [600, "Tour included is too large. maximum 600 characters"]
    },
    person: {
        type: Number,
        required: [true, "Mention person"]
    }
}, {
    timestamps: true
});

// instance method
tourSchema.methods.logger = function () {
    console.log(`Data saved for ${this.name}`);
}


const Tours = mongoose.model('Tours', tourSchema);

module.exports = Tours;