var AcmeStore = (function(acmestore){

    acmestore.fireworksSelection = function (categories, types, selectedProducts) {
        console.log("fireworksSelection is running")

        var personalArr = []
        var professionalArr = []
        var illegalArr = []

        for (key in selectedProducts) {
            if (selectedProducts[key].type === 0) {
                personalArr.push(selectedProducts[key])
            }
            if (selectedProducts[key].type === 1) {
                professionalArr.push(selectedProducts[key])
            }
            if (selectedProducts[key].type === 2) {
                illegalArr.push(selectedProducts[key])
            }
        }
        acmestore.renderProducts(personalArr, professionalArr, illegalArr)
    }

    acmestore.demolitionsSelection = function (categories, types, selectedProducts) {
        console.log("fireworksSelection is running")

        var smallScaleArr = []
        var mediumScaleArr = []
        var largeScaleArr = []

        for (key in selectedProducts) {
            if (selectedProducts[key].type === 3) {
                smallScaleArr.push(selectedProducts[key])
            }
            if (selectedProducts[key].type === 4) {
                mediumScaleArr.push(selectedProducts[key])
            }
            if (selectedProducts[key].type === 5) {
                largeScaleArr.push(selectedProducts[key])
            }
        }
        acmestore.renderProducts(smallScaleArr, mediumScaleArr, largeScaleArr)
    }

    return acmestore

})(AcmeStore || {})
