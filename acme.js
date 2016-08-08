var AcmeStore = (function(acmestore){

    //Selects whether to display Fireworks or Demolitions
    acmestore.pickCategory = function (categories, types, products) {

        var userOptionSelection = $("#optionBar").val()

        if (userOptionSelection === "fireworks") {
            acmestore.fireworksSelection(categories, types, products)
        }
        if (userOptionSelection === "demolition") {
            acmestore.demolitionsSelection(categories, types, products)
        }
    },

    //Renders items to the DOM
    acmestore.renderProducts = function (categories, types, products) {
        outputEl = $("#results")
        outputEl.html("")

        products.forEach( function (product) {
            outputEl.append(
                `<div class="col-md-3 card">
                <h1>${product.name}</h1>
                <p>${product.description}</p>
                <p>Find this in the <span class="bold">${types[product.type].name}</span> section of the
                <span class="bold">${categories[types[product.type].category].name}</span> aisle</p>
                </div>`)

        })
    }

    return acmestore

})(AcmeStore || {})
