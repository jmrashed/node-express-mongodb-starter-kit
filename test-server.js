const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Server is working!' });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Test server running on port ${PORT}`);
});