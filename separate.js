var AcmeStore = (function(acmestore){

    acmestore.fireworksSelection = function (categories, types, products) {
        console.log("fireworksSelection is running")

        var personalArr = []
        var professionalArr = []
        var illegalArr = []

        var selectedFireworks = [personalArr, professionalArr, illegalArr]

        for (key in products) {
            if (products[key].type === 0) {
                personalArr.push(products[key])
            }
            if (products[key].type === 1) {
                professionalArr.push(products[key])
            }
            if (products[key].type === 2) {
                illegalArr.push(products[key])
            }
        }
        acmestore.renderProducts(selectedFireworks)
    }

    acmestore.demolitionsSelection = function (categories, types, products) {
        console.log("fireworksSelection is running")

        var smallScaleArr = []
        var mediumScaleArr = []
        var largeScaleArr = []

        var selectedDemolitions = [smallScaleArr, mediumScaleArr, largeScaleArr]

        for (key in products) {
            if (products[key].type === 3) {
                smallScaleArr.push(products[key])
            }
            if (products[key].type === 4) {
                mediumScaleArr.push(products[key])
            }
            if (products[key].type === 5) {
                largeScaleArr.push(products[key])
            }
        }
        acmestore.renderProducts(selectedDemolitions)
    }

    return acmestore

})(AcmeStore || {})
