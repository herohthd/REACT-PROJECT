const mongoose = require('mongoose');
const RecipesTemplateCopy = require('./RecipesModel')
const signInTemplate= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    recipes:{

    },
    date:{
        type:Date,
        default:Date.now
    },
})

module.exports = mongoose.model('usersLogin',signInTemplate);