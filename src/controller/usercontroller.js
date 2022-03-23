const express = require("express");

const User = require("../model/user");

const router = express.Router();

const transporter = require("../config/mail")


router.post("", async (req, res) => {
    try {
        const data = await User.create(req.body);

        let info = await transporter.sendMail({
            from: 'admin@gamil.com', // sender address
            to: `${data.email}`, // list of receivers
            subject: `Welcome to ABC system ${data.first_name} ${data.last_name}`, // Subject line
            text: `Hi ${data.first_name}, Please confirm your email address`, // plain text body
            html: "<b>Hello world?</b>", // html body
        });

        let admin = await transporter.sendMail({
            from: 'master@gamil.com', // sender address
            to: `amarkrsoni8989@gmail.com,amarsoni03697@gmail.com,amar19950401@gmail.com,amarkr8989@gmail.com,as9355745@gmail.com`, // list of receivers
            subject: `Welcome to ABC system ${data.first_name} ${data.last_name}`, // Subject line
            text: `Hi ${data.first_name}, Please confirm your email address`, // plain text body
            html: "<b>Hello world?</b>", // html body
        })

        res.send(data)
    }
    catch (err) {
        console.log(err.message)
    }
})

module.exports=router