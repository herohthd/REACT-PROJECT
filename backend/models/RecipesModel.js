const mongoose = require('mongoose');

const recipeTemplate = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    ingredients:{
        type:String,
        required:true
    },
    steps:{
        type:String,
        required:true
    },
    difficulty:{
        type:String,
        required:true
    },
    yeild:{
        type:String,
        required:true
    },
    numOfPeople:{
        type:String,
        required:true
    },
    times:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('recipes',recipeTemplate);