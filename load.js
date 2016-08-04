var AcmeStore = (function(acmestore){

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
      products = res[2].products
      acmestore.pickCategory(categories, types, products)
    })
  }

  return acmestore

})(AcmeStore || {})

AcmeStore.loadProducts()