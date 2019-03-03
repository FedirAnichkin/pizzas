const express = require("express");
const app = express();
const stor = require("./store")
const Store = stor.Store;

let ingridientsName = ["Tomatsauce", "Tomatos", "Mozarella",
                   "Basil", "Oregano", "Balyk",
                   "Chickenfillet", "Ananas", "Becon",
                   "Mushrooms","Bell Pepper", "Bavarian Sausage",
                   "Proshutto", "Sauce Pesto", "Tomatos Cherry", 
                   "Arugula", "Parmesan"];
let ingridientsWeight = [10, 5, 12, 0.5, 0.3, 5, 10, 1, 2, 2, 4, 2, 0.5, 0.3, 3, 0.3, 5];
for (let i=0; i < ingridientsName.length; i++) {
    new Store(ingridientsName[i], ingridientsWeight[i]);
}

app.get("/", function(request, response){
    response.send("PizzasStore");
});
app.listen(3000);