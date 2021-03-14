const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const app = express();

app.get("/", (req, res) => {

    let today = new Date();
    let currentDay = today.getDay();

    if (currentDay === 6 || currentDay === 0){
        res.sendFile(__dirname + "/index.html")
    } else {
        res.write("work")
    }
});



















app.listen(3000, () => console.log("Server work!"));
