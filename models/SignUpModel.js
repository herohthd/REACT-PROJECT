const mongoose = require('mongoose');

const signUpTemplate = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true 
    },
    avatar:{
        type:String,
        required:true
    },
    favouritedRecipes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'recipes'
    },
    recipes:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:'recipes'
    },
    numOfLike:{
        type:Number,
        default:0
    },
    date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('users',signUpTemplate);