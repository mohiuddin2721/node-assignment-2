const mongoose = require('mongoose');

// schema design
const toolSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this tools"],
        unique: [true, "Name must be unique"],
        trim: true,
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too large."]
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"],
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: "pcs",
            message: "Unit value can't be {VALUE}, must be pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Quantity can't be negative"],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if(isInteger){
                    return true
                } else {
                    return false
                }
            }
        },
        message: "Quantity must be an integer" 
    },
    status: {
        type: String, 
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "Status can't be {VALUE}"
        }
    }
}, {
    timestamps: true
})