const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/submit", function(req, res){
    let name = req.body.name;
    res.send("Hello " + name);
});

app.listen(3000);