const mongoose = require('mongoose');

const authorShow = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }, 
    numberOfRecipies: {
        type: Number,
        required: true
    },
    imageURL: {
        type: String,
        required: true
    }
})

const Author = mongoose.model('author', authorShow);

module.exports = Author;