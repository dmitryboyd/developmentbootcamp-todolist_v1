const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = ["Buy Food", "Cook food", "Eat Food"];
let workItems = [];

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
        listTitle: day,
        newListItems: items
    });
});

app.get("/work", (req, res) => {
    res.render("list", {
        listTitle: "Work List",
        newListItems: workItems
    })
});

app.post("/work", (req, res) => {
    let item = req.body.newItem;
    workItems.push(item);
    res.redirect("/work");
})

app.post("/", (req, res) => {
    item = req.body.newItem;
    if (req.body.list === "Work") {
        workItems.push(item)
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/")
    }
})



















app.listen(3000, () => console.log("Server work!"));
