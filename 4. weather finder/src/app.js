const express = require('express');
const app = express();
require('dotenv-extended').load();
const router = require('./route');


app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static("public"));

app.set('views', 'views');
app.set('view engine', 'hbs');

app.use('/', router);


app.listen(process.env.PORT || 3000, ()=>{
    console.log("The server is running on port 3000");
});