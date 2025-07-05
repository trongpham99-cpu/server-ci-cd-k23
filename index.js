const express = require('express');
const app = express();
const port = 6789;

app.get('/', (req, res) => {
    res.send('Hello, World 123!');
})

app.get('/api/v1/products', (req, res) => {
    res.json([
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 }
    ]);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});