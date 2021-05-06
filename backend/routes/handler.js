const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const signUpTemplateCopy = require('../models/SignUpModel')
const signInTemplateCopy = require('../models/SignInModel')
const recipeTemplateCopy = require('../models/RecipesModel')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = "WEBPROGRAMMING GROUP3"

router.post('/register', async(req,res) => {
    const {fullname,username,password:securePassword,avatar} = req.body
    const password = await bcrypt.hash(securePassword,10)
    try {
        const response = await signUpTemplateCopy.create({
            fullname,
            username,
            password,
            avatar
        })
        console.log("Register successfully",response)
    }
    catch (error) {
        console.log(error.message)
        if(error.code === 11000){
            return res.json({status:'error',error:'Username is in use!'})
        }
        throw error
    }
    res.json({status:'ok'})
});

router.post('/login', async(req,res) => {

    const {usernameLogin,passwordLogin} = req.body
    //use lean to get only json
    const user = await signUpTemplateCopy.findOne({username:usernameLogin}).lean()
    if(!user){
        return res.json({status:'error',error:'Invalid username/password'})
    }
    if(await bcrypt.compare(passwordLogin,user.password)){
        // the username and password is correct
        const token = jwt.sign({
            id:user._id,
            username:user.usernameLogin
        }, JWT_SECRET)
        return res.json({status:'ok',data:{
            id:user._id,
            username:usernameLogin,
            token:token
        }})
    }
    res.json({status:'error',error:'Invalid username/password'})
});

router.post('/submit', async(req,res) => {
    const {user,title,cuisine,category,image,description,
        ingredients,steps,difficulty,
        yeild,numOfPeople,times} = req.body
        try {
            const response = await recipeTemplateCopy.create({
                user:user,
                title,
                cuisine,
                category,
                image,
                description,
                ingredients:ingredients,
                steps:steps,
                difficulty,
                yeild,
                numOfPeople,
                times
            })
            const response1 = await signUpTemplateCopy.findByIdAndUpdate(user,{
                $push: { recipes: response._id }
            })
            console.log("Submit successfully",response,response1)
        }
        catch (error) {
            console.log(error.message)
            return res.json({status:'error',error:'Cannot submit recipe'})
        }
        res.json({status:'ok'})
})

router.post('/addFavourited', async(req,res) => {
    const {recipeID,userID} = req.body
        try {
            const response = await signUpTemplateCopy.findByIdAndUpdate(userID,{
                $push: { favouritedRecipes: recipeID }
            })
            console.log("Add to favourited list successfully",response)
        }
        catch (error) {
            console.log(error.message)
            return res.json({status:'error',error:'Cannot add to favourited list'})
        }
        res.json({status:'ok'})
})

router.get('/recipes', async(req,res) => {
    const recipes = await recipeTemplateCopy.find({}).populate("user").exec((err,recipeData) => {
        if(err) throw err;
        if(recipeData) {
            // console.log(JSON.stringify(recipeData));
            res.end(JSON.stringify(recipeData));
        } else{
            console.log("cant read recipe");
            res.end();
        }
    })
})

router.get('/members', async(req,res) => {
    const members = await signUpTemplateCopy.find({}).populate('recipes').populate('favouritedRecipes').exec((err,memberData) => {
        if(err) throw err;
        if(memberData) {
            // console.log(JSON.stringify(memberData));
            res.end(JSON.stringify(memberData));
        } else{
            console.log("cant read member");
            res.end();
        }
    })
})

router.get('/members/:id',async(req,res) => {
    // console.log(req.params.id)
    const member = await signUpTemplateCopy.findById(req.params.id).populate('recipes').populate('favouritedRecipes').exec((err,memberData) => {
        if(err) throw err;
        if(memberData) {
            // console.log(JSON.stringify(memberData));
            res.end(JSON.stringify(memberData));
        } else{
            console.log("cant read member");
            res.end();
        }
    })
})
module.exports = router;