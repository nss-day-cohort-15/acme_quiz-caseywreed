var AcmeStore = (function(acmestore){
    containerEl = $(".container")
    containerEl.prepend(
        `<div>
            <select name="categoryOption" id="optionBar">
                <option value="fireworks" name="categorySelection" selected>Fireworks</option>
                <option value="demolition" name="categorySelection">Demolition</option>
            </select>
            <button id="mainButton">See Some Products</button>
        </div>`)

    $("#mainButton").on("click", function () { acmestore.loadProducts() } )

    var categories;
    var types;
    var products;

    acmestore.loadProducts = function () {
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
