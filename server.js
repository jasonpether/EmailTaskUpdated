const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const cors = require("cors");
require("dotenv").config();

const app = express();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/POST', (req, res) => {
    const email = req.body.email;

    if (!email) {
        return res.status(400).send("Email is required.");
    }

    const msg = {
        to: email,
        from: "varinjpether@gmail.com",
        subject: "Task9.1C",
        text: "Yippie",
    };

    sgMail
        .send(msg)
        .then(() => res.status(200).send("Email sent successfully."))
        .catch((error) => {
            console.error("Error:", error);
            res.status(500).send("Error sending email.");
        });
});

app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});
