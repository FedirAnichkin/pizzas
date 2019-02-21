const express = require("express");
const products = require("./store");
const menu = require("./pizzas");

const app = express();
app.get("/", function(request, response){
    response.send("PizzasStore");
});
app.listen(3000);