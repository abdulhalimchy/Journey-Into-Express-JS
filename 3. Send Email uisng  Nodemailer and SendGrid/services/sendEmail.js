const nodemailer = require('nodemailer');
const nodemailerSendgrid = require('nodemailer-sendgrid');

exports.sendEMailTo = async (mailOptions) => {
    return new Promise((resolve, reject) => {
        let transport = nodemailer.createTransport(
            nodemailerSendgrid({
                apiKey: process.env.SENDGRID_API_KEY
            })
        );

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
