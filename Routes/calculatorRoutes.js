const express = require("express");
const router = express.Router();
const Controllers = require("../controllers/calculatorController");

router.get('/twerks',  (req, res) => { 
    // Controllers.getAppt(req, res);
    res.send('sucessful')

})

router.get('/AI',  (req, res) => { 
    Controllers.test(req, res);
    // res.send('sucessful')

})
module.exports = router;
