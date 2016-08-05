var AcmeStore = (function(acmestore){

  acmestore.pickCategory = function (categories, types, products) {

    console.log("pickCategory is running!")
    var userOptionSelection = document.getElementById("optionBar").value
    var selectedProducts = []

    if (userOptionSelection === "fireworks") {
        console.log("fireworks is selected")
        for (key in products) {
            if (products[key].type === 0) {
                selectedProducts.push(products[key])
            }
        }
    }
    if (userOptionSelection === "demolition") {
        console.log("demolition is selected")
        for (key in products) {
            if (products[key].type === 1) {
                selectedProducts.push(products[key])
            }
        }
    }
        console.log(selectedProducts)
        return selectedProducts
    }

 return acmestore

})(AcmeStore || {})
