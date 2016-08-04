var AcmeStore = (function(acmestore){

  acmestore.pickCategory = function (categories, types, products) {
    console.log("pickCategory is running!")
     var userOptionSelection = document.getElementById("optionBar").value
     if (userOptionSelection === "fireworks") {
      console.log("fireworks is selected")
     }
     else if (userOptionSelection === "demolition") {
      console.log("demolition is selected")
     }
  }

 return acmestore

})(AcmeStore || {})
