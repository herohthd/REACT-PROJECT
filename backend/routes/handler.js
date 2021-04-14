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
    const {fullname,username,password:securePassword} = req.body
    const password = await bcrypt.hash(securePassword,10)
    try {
        const response = await signUpTemplateCopy.create({
            fullname,
            username,
            password
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
    res.json({status:'ok'})
});

router.post('/submit', async(req,res) => {
    const {title,image,description,
        ingredients,steps,difficulty,
        yeild,numOfPeople,times} = req.body
        try {
            const response = await recipeTemplateCopy.create({
                title,
                image,
                description,
                ingredients,
                steps,
                difficulty,
                yeild,
                numOfPeople,
                times
            })
            console.log("Submit successfully",response)
        }
        catch (error) {
            console.log(error.message)
            return res.json({status:'error',error:'Cannot submit recipe'})
        }
        res.json({status:'ok'})
})
module.exports = router;