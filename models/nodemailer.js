const nodemailer = require('nodemailer');
const sequelize = require("../config/connection");
const user  = require("./user")

async function volunteerAlert() {

let transporter = nodemailer.createTransport({
    host: "helpinghands.volunteeralert@gmail.com",
    port: 587,
    secure: false,
    auth: {
        user:"helpinghands.volunteeralert@gmail.com",
        pass: "helpinghands01"
    },
});

let email = await transporter.sendMail({
    from: ' " helping hands " <helpinghands.volunteeralert@gmail.com> ',
    to: `${user.email}`,
    subject: "Thank you for volunteering!",
    text: "Thank you so much for volunteering to give a hand in your community! At helpings hands we're all about teamwork and we think you deserve to be recognized for helping your fellows! Hats off to you and all hands on deck. :)",
    html: ""
});

}

document
    .querySelector('#volunteerBtn')
    .addEventListener('click', volunteerAlert);