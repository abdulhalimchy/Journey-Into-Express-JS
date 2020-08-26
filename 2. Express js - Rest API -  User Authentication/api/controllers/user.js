const User = require('../models/User');
const bcrypt = require('bcrypt'); // for password hashing
const jwt = require('jsonwebtoken');


//REGISTER a User
const registerUser = (req, res, next)=>{
    bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if(err){
            res.json({
                error: err
            });
        }
        let user = new User({
            email: req.body.email,
            password: hash
        });

        user.save()
            .then(result=>{
                res.status(201).json({
                    message: "Registration Successful"
                });
            })
            .catch(err=>{
                res.json({
                    error: err
                });
            });
    });
}

//Login user
const loginController = (req, res, next)=>{
    let email=req.body.email;
    let password=req.body.password;

    User.findOne({email: email})
        .then(user=>{
            if(user){
                bcrypt.compare(password, user.password, (err, result)=>{
                    if(err){
                        res.json({
                            message: 'Error occurred',
                        });
                    }
                    else if(result){
                        //Creating a token
                        let token = jwt.sign({email: user.email, _id: user._id}, 'SECRETKEY', {expiresIn: '2h'});

                        res.json({
                            message: "Login Successful",
                            token
                        });
                    }
                    else{
                        res.json({
                            message: 'Login Faild! Password does not matched',
                        });
                    }
                })
            }
            else{
                res.json({
                    message: "User not found!"
                });
            }
        })
        .catch(err=>{
            res.json({
                error: err
            });
        });
}


//GET all user
const getAllUser = (req, res, next)=>{
    User.find()
        .then(users=>{
            res.status(200).json({
                users
            });
        })
        .catch(err=>{
            res.json({
                error: err
            });
        });
}

module.exports = {
    registerUser,
    getAllUser,
    loginController
}