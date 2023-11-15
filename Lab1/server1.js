const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server1.html');
});

app.listen(port, () => {
    console.log(`Server 1 is running at http://localhost:${port}`);
});

