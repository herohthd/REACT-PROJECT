const express =  require('express');
const { model } = require('mongoose');
const router = express.Router();

const { 
    getAllAuthors, 
    getAuthorsById
} = require('../controller/authorControllers')

//@desc Get all authours from db
//@route Get/api/authors
//@access Public
router.get('/', getAllAuthors)

//@desc Get authours by id from db
//@route Get/api/authors/:id
//@access Public
router.get('/:id', getAuthorsById)

module.exports = router;