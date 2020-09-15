const nodemailer = require('nodemailer');

exports.sendEMailTo = async (mailOptions) => {
    return new Promise((resolve, reject) => {
        let transport = nodemailer.createTransport({ 
            service: 'gmail', 
            auth: { 
                user: process.env.SEND_MAIL_FROM, 
                pass: process.env.MAIL_PASSWORD
            } 
        });

        transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log("error is " + error);
                resolve(false); // or use rejcet(false) but then you will have to handle errors
            }
            else {
                console.log('Email sent: ' + info.response);
                resolve(true);
            }
        })
    })
}
