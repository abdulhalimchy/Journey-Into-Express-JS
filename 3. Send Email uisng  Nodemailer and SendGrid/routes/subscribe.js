const express = require("express");
const router = express.Router();
const sendEmail = require('../services/sendEmail');

router.get('/', (req, res)=>{
    res.redirect('/');
});

router.post('/', async (req, res)=>{
    const { email } = req.body;
    if(!email)
    {
        req.flash('error_msg', 'Please enter an email');
        res.redirect('/');
    }else{

        const mailOptions = {
            from: process.env.SEND_MAIL_FROM,
            to: email,
            subject: 'Send From Nodemailer | Nodemailer-Sendgrid',
            html: '<h1>Hello, This is a test email. Don\'t reply to this email.</h1>'
        }

        let mailSent = await sendEmail.sendEMailTo(mailOptions);
        
        if(mailSent){
            req.flash('success_msg', 'Subscribed Successfully');
        }else{
            req.flash('error_msg', 'Failed to sent email');
        }
        res.redirect('/');
    }
});

module.exports = router;