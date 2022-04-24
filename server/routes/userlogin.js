const express = require('express')
const { Credential } = require('../db/dbConnection')
const router = express.Router()
const db = require('../db/services/services')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys")
const validateLoginInput = require("../validation/login");
// Load User model

router.post("/", async (req, res) => {
    const { errors, isValid } = validateLoginInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email
    const password = req.body.password
    const userr = await db.findUser({ "email": email })
    if (!userr[0]) {
        res.status(404).json({ emailnotfound: "Email not found" })
    } else {
        bcrypt.compare(password, userr[0].password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: Credential.id,
                    name: Credential.name
                };
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({ passwordincorrect: "Password incorrect" });
            }
        }
        )}
    })





module.exports = router