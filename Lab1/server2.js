const express = require('express');
const app = express();
const port = 3002;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/server2.html');
});

app.listen(port, () => {
    console.log(`Server 2 is running at http://localhost:${port}`);
});
