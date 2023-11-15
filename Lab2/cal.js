const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server1.html');
});

// Addition route
app.get('/add/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 + num2;
    res.send(`Result of addition: ${result}`);
});

// Subtraction route
app.get('/subtract/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 - num2;
    res.send(`Result of subtraction: ${result}`);
});

// Multiplication route
app.get('/multiply/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);
    const result = num1 * num2;
    res.send(`Result of multiplication: ${result}`);
});

// Division route
app.get('/divide/:num1/:num2', (req, res) => {
    const num1 = parseFloat(req.params.num1);
    const num2 = parseFloat(req.params.num2);

    // Check for division by zero
    if (num2 === 0) {
        res.status(400).send('Error: Cannot divide by zero');
    } else {
        const result = num1 / num2;
        res.send(`Result of division: ${result}`);
    }
});

app.listen(port, () => {
    console.log(`Server 1 is running at http://localhost:${port}`);
});
