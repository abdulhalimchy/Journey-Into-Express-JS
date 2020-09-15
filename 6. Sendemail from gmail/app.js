const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const app = express();
const session = require('express-session');
const flash = require('connect-flash');


//Morgan
app.use(morgan('dev'));

// Express body parser
app.use(express.urlencoded({ extended: true }));


//Session
app.use(session({
    secret: "topsecret",
    cookie: { maxAge: 3600000},
    resave: false,
    saveUninitialized: false
}));

//Flash
app.use(flash());

//Global variables
app.use((req, res, next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    next();
});

// EJS
app.set('view engine', 'ejs');


//Routes
app.use('/', require('./routes/home')); //use home route
app.use('/subscribe', require('./routes/subscribe')); //use subscribe route


const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`The server is running on PORT: ${PORT}`);
});