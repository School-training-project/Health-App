const express = require('express')
const { Credential } = require('../db/dbConnection')
const router = express.Router()
const db = require('../db/services/services')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const validateRegisterInput = require("../validation/register");



router.post("/", async (req, res) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(405).json(errors);
    }
    const { name, email, password } = req.body;
    const userr = await db.findUser({ email: email })
    if (userr[0]) {
        res.status(400).json({ message: "user already exist" })
    } else {
        const user = new Credential({ name, email, password })
        await db.createUserData({
            email: email,
        })
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                if (err) throw err;
                user.password = hash;
                user
                    .save()
                    .then(user => res.json(user))
                    .catch(err => console.log(err));
            });
        });
    }
});

module.exports = router