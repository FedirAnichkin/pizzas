const prod = require("./products");
const Product = prod.Product;

class Store extends Product {
    constructor(name, weight){
        super(name);
        this.weight = weight;
    }
}
exports.Store = Store;