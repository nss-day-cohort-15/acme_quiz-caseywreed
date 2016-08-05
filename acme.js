var AcmeStore = (function(acmestore){

    //Selects whether to display Fireworks or Demolitions

    acmestore.pickCategory = function (categories, types, products) {

        var userOptionSelection = document.getElementById("optionBar").value

        if (userOptionSelection === "fireworks") {
            console.log("fireworks is selected")
            acmestore.fireworksSelection(categories, types, products)
        }
        if (userOptionSelection === "demolition") {
            console.log("demolition is selected")
            acmestore.demolitionsSelection(categories, types, products)
        }
        },

        //Renders items to the DOM
        acmestore.renderProducts = function (products) {
            console.log(products)
        }

        return acmestore

})(AcmeStore || {})
