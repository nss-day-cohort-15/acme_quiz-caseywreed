var AcmeStore = (function(acmestore){

    document.getElementById("mainButton").addEventListener("click", function () { acmestore.loadProducts() } )

    var categories;
    var types;
    var products;

    acmestore.loadProducts = function () {
    console.log("loadProducts is running")
    Promise.all([
        $.getJSON('categories.json'),
        $.getJSON('types.json'),
        $.getJSON('products.json')
        ])
    .then(function (res) {
        categories = res[0].categories
        types = res[1].types
        products = res[2].products[0]
        acmestore.pickCategory(categories, types, products)
    })
    }

    return acmestore

})(AcmeStore || {})
