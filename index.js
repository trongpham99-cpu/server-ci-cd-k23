const express = require('express');
const app = express();
const port = 6789;

app.get('/', (req, res) => {
    res.send('Hello, World 123!');
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});