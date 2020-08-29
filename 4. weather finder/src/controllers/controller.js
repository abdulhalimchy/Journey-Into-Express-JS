const axios = require('axios');
const API_KEY = process.env.OPEN_WEATHER_MAP_API_KEY;
const Weather = require('../models/Weather');

exports.renderHomePage = (req, res, next) =>{
    res.render('index');
}


exports.renderAboutPage = (req, res, next) =>{
    res.render('about');
}

exports.getWeather = (req, res, next) =>{
    const city = req.body.city;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    
    const weather = new Weather(city);
    weather.validateUserInput();

    if(weather.errors.length){
        res.render('index',{
            error: weather.errors.toString()
        });
    }
    else{
        axios.get(url).then((result)=>{
            res.render('index', {
                weather: `It is currently ${result.data.main.temp} degree celsius in ${result.data.name}`
            });
        }).catch(err=>{
            res.render('index', {
                error: "The entered city is not found!"
            })
        });
    }
}