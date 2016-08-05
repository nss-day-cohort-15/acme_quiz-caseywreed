var AcmeStore = (function(acmestore){

    acmestore.pickCategory = function (categories, types, products) {

        var userOptionSelection = document.getElementById("optionBar").value
        var selectedProducts = []

        if (userOptionSelection === "fireworks") {
            console.log("fireworks is selected")
            for (key in products) {
                if (products[key].type === 0) {
                    selectedProducts.push(products[key])
                }
            }
            acmestore.fireworksSelection(categories, types, selectedProducts)
        }
        if (userOptionSelection === "demolition") {
            console.log("demolition is selected")
            for (key in products) {
                if (products[key].type === 1) {
                    selectedProducts.push(products[key])
                }
            }
            acmestore.demolitionsSelection(categories, types, selectedProducts)
        }
            return selectedProducts
        },
        //Renders items to the DOM
        acmestore.renderItems = function () {}

        return acmestore

})(AcmeStore || {})
