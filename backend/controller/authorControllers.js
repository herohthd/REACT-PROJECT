const Author = require('../models/Authors');

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find({});
        res.json(authors);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getAuthorsById = async (req, res) => {
    try {
        const authors = await Author.findById(req.params);
        res.json(authors);
    } catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

module.exports = {
    getAllAuthors,
    getAuthorsById,
}