const addNumbers = (req, res) => {
    let number1 = parseInt(req.query.num1);
    let number2 = parseInt(req.query.num2);
    let sum = number1 + number2;
    console.log(sum);
    res.status(200).json({ result: sum });
};

module.exports = {
    addNumbers,
};



const express = require('express');
const calculatorController = require('../controllers/calculatorController');
const router = express.Router();

router.get('/add', calculatorController.addNumbers);

module.exports = router;