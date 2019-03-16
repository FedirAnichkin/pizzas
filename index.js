const express = require("express");
const app = express();
const store = require("./store");
const Product = require("./Product");

let ingridientsName = ["Tomatsauce", "Tomatos", "Mozarella",
                   "Basil", "Oregano", "Balyk",
                   "Chickenfillet", "Ananas", "Becon",
                   "Mushrooms","Bell Pepper", "Bavarian Sausage",
                   "Proshutto", "Sauce Pesto", "Tomatos Cherry", 
                   "Arugula", "Parmesan"];
let ingridientsWeight = [10, 5, 12, 0.5, 0.3, 5, 10, 1, 2, 2, 4, 2, 0.5, 0.3, 3, 0.3, 5];
for (let i=0; i < ingridientsName.length; i++) {
    store.add(new Product(ingridientsName[i], ingridientsWeight[i]));
}

store.getAll().forEach(item => console.log('' + item));

app.get("/", function(request, response){
    response.send("PizzasStore");
});
app.listen(3000);