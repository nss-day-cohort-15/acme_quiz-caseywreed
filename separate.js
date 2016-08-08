var AcmeStore = (function(acmestore){

    acmestore.fireworksSelection = function (categories, types, products) {

        var selectedFireworks = []

        for (key in products) {
            if (products[key].type >= 0 && products[key].type < 3) {
                selectedFireworks.push(products[key])
            }
        }
        acmestore.renderProducts(categories, types, selectedFireworks)
    }

    acmestore.demolitionsSelection = function (categories, types, products) {

        var selectedDemolitions = []

        for (key in products) {
            if (products[key].type >= 3 && products[key].type < 6) {
                selectedDemolitions.push(products[key])
            }
        }
        acmestore.renderProducts(categories, types, selectedDemolitions)
    }

    return acmestore

})(AcmeStore || {})
