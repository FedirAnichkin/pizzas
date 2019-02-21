const addProd = require("./addProducts");

let store = {
    tomatsauce:10,
    tomatos:5,
    mozarella:12,
    basil:0.5,
    oregano:0.3,
    balyk:5,
    chickenfillet:10,
    ananas:1,
    corn:1,
    becon:2,
    mushrooms:2,
    bellPepper:4,
    bavarianSausages:2,
    proshutto:0.5,
    saucePesto:0.3,
    tomatosCherry:3,
    arugula:0.3,
    parmesan:5
};
const add = addProd.addProducts(store);
