const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

let items = ["Buy Food", "Cook food", "Eat Food"];

app.get("/", (req, res) => {
    let today = new Date();
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    let day =  today.toLocaleDateString("en-US", options);
    // let currentDay = today.getDay();
    // let day = "";
    // let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //
    // day = currentDay === 6 || currentDay === 0 ? dayNames[currentDay] : dayNames[currentDay];
    res.render("list", {
        kindOfDay: day,
        newListItems: items
    });
});

app.post("/", (req, res) => {
    item = req.body.newItem;
    items.push(item);

    res.redirect("/")
});



















app.listen(3000, () => console.log("Server work!"));
