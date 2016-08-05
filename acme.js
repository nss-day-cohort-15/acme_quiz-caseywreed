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
    acmestore.renderProducts = function (products) {
        console.log("renderProducts is running")
        console.log(products)

        //Nested forEach loops dig into each product array and then their individual products
        products.forEach( function (productArr) {
            // Loop over each array and make a div with a class of the array's "type" I guess??? Really close
            // $(#results).append(`###`)
            productArr.forEach( function (product) {
                $("#results").append(
                    `<div class="col-md-3 card">
                    <h1>${product.name}</h1>
                    <p>${product.description}</p>
                    </div>`)

            })
        })

    }

    return acmestore

})(AcmeStore || {})
