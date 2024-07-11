const express = require("express");
const router = express.Router();
const Client = require("../models/Client");

// Create client
router.post("/add", (req, res) => {
    const { name, company, email } = req.body;

    const newClient = new Client({
        name,
        company,
        email
    });

    newClient.save()
        .then(() => res.json("Client added"))
        .catch((err) => {
            console.error(err);
            res.status(500).json("Error: " + err);
        });
});

//view
router.get("/", (req, res) => {
    Client.find().then((clients) => {
        res.json(clients);
    }).catch((err) => {
        console.error(err);
        res.status(500).json("Error: " + err);
    })
})

module.exports = router;
