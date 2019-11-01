const express = require('express'); 
const app = express();
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const productRoutes = require('./api/routes/products'); 
const orderRoutes = require('./api/routes/orders');

//Database Connection
mongoose.connect('mongodb+srv:///*username*/:/*password*/@practicecluster-d56m9.mongodb.net/test?retryWrites=true&w=majority', {
    useMongoClient: true
}); 

//API Connection
app.use(morgan('dev')); 
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false})); 
app.use(bodyParser.json()); 

//API Access
app.use((res, req, use) => {
    res.header("Access-Control-Allow-Origin", '*'); 
    res.header(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"); 
        if (req.method === 'OPTIONS'){
            res.header('Access-Control-Allow-Methods', 
            'PUT, POST, PATCH, DELETE, GET'
            ); 
            return res.status(200).json({}); 
        }
});

//Routes for request management
app.use('/products', productRoutes); 
app.use('/orders', orderRoutes); 

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404; 
    next(error);
});

app.use((error, req, res, next) =>{
    res.status(error.status || 500); 
    res.json({
        error: {
            message: error.message
        }
    }); 
});

module.exports = app; 