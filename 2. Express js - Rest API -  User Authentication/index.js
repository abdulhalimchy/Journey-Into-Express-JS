const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoute = require('./api/routes/contact');
const userRoute = require('./api/routes/user')

//connecting to mongodb
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/contacts-db');

const db = mongoose.connection;

db.on('error',(err)=>{
    console.log(err);
});

db.once('open', ()=>{
    console.log('Database Connection Established!');
});



const app = express();

//morgan is a third party middleware function
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//cors cross origin resourcs sharing
app.use(cors());


//user route
app.use('/api/users', userRoute);
//contact api route setting
app.use('/api/contacts', contactRoute);



// Creating contact api route, It is not standard to create route in here, But for practice, 
app.get('/',(req,res)=>{
    // res.json(contacts);
    res.send('Home Page');
});


//Getting port
const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`The server is running on PORT: ${PORT}`);
});
