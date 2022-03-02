function saveProduct(product) {
  let products = JSON.parse(localStorage.getItem("products"));
  if (products) {
    products.push(product);
  } else {
    products = [product];
  }
  localStorage.setItem("products", JSON.stringify(products));
}

function getAll() {
  let products = JSON.parse(localStorage.getItem("products"));
  return products;
}

const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

function getByCategory(categories) {
  let products = JSON.parse(localStorage.getItem("products"));

  products.map((product) => {
    categories[product.category].amount.push(parseInt(product.amount));
    categories[product.category].price.push(parseInt(product.price));
  });
  Object.keys(categories).map((key) => {
    categories[key].amount = average(categories[key].amount);
    categories[key].price = average(categories[key].price);
  });
  console.log(categories);
  return categories;
}

export { saveProduct, getAll, getByCategory };
