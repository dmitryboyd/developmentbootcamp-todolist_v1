const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/todolistDB", {useNewUrlParser: true});

const itemsSchema = {
    name: String
};

const Item = mongoose.model("Item", itemsSchema)

app.get("/", (req, res) => {
    const day = date.getDay();
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

app.get("/about", (req, res) =>  {
    res.render("about");
})

app.post("/work", (req, res) => {
    const item = req.body.newItem;
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
