const express = require("express");
const path = require("path");
const parseBody = require("body-parse");

const app = express();
const port = 4000;
app.use(parseBody.urlencoded({ encoded: false }))
app.use(express.json());

app.get("api/c1/userdata", (req, res) => {
    res.json({
        name: "Abhi",
        email: "sample@gmail.com",
        password: "hello",
    })
})
app.post("api/c1/register", (req, res) => {
    const userName = req.body.name;
    const userEmail = req.body.email;
    const userPassword = req.body.password;

    res.json({
        success: true,
        name: userName,
        email: userEmail,
        password: userPassword,
    })
})