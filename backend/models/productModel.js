const mongoose = require("mongoose");           // product model
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your product's Name."],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Please enter your product's Description."]
    },
    price: {
        type: Number,
        required: [true, "Please enter your product's Price."],
        maxLength: [8, "Price cannot be above 8 charecters."]
    },
    rating: {
        type: Number,
        default: 0
    },
    // the obj is going to be an array of imgages
    images: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    category: {
        type: String,
        required: [true, "Please enter your product's Category."]
    },
    stock: {
        type: Number,
        required: [true, "Please enter your product's stock."],
        maxLength: [5, "Price cannot be above 5 charecters."],
        default: 1
    },
    numOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [{
        name: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        },
        comment: {
            type: String,
            required: true
        },
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
})

module.exports=mongoose.model("Product",productSchema);