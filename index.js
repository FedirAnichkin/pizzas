const express = require("express");
const products = require("./store");
const menu = require("./pizzas");

const app = express();
app.get("/", function(request, response){
    response.send("PizzasStore");
});
app.get("/menu", function(request, response){
    response.send(menu.menu.hawaiian.tomatsauce.toString()*1000 + "gr");
});
app.listen(3000);