function addProducts(obj){
    for(var key in obj){
        if(obj[key] <= 0){
            obj[key] += 1;
        }
    }
    return obj;
}

exports.addProducts = addProducts;