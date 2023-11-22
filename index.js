const express = require("express");

const cors = require("cors");
const app = express();
app.use(express.json());
let calculatorRoutes = require('./routes/calculatorRoutes');
app.use('/api/calculator', calculatorRoutes);


let friendRoutes = require('./routes/friendRoutes');
app.use('/api/friends', friendRoutes);
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
const PORT2 = 3001;
app.listen(PORT2, () => {
    console.log(`Server is running on port ${PORT2}.`);
});
