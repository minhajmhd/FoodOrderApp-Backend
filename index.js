const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000
const app = express();

app.listen(PORT, () => {
    console.log(`Server listening on the port ${PORT}`);
});

app.use(express.json());

app.use(cors({
    origin:'http://localhost:4200'
}));

const dataService = require('./services/dataService')

app.use('/user', require('./routes/userRoutes'))


// API to get all products
app.get('/all-products', (req,res) => {
    dataService.getAllProducts().then(result => {
        res.status(result.statusCode).json(result)
    })
})