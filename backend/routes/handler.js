const express = require('express');
const router = express.Router();

router.get('/login', (req,res) => {
    const str = [{
        "fullname":"Huy",
        "username":"herohthd",
        "password":"huy"
    }];
    res.end(JSON.stringify(str));
});


module.exports = router;