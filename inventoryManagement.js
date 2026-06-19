let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Function to log the first product
function logFirstProduct() {
  console.log(products[0]);
}

// Function to add a new product
function addProduct(productName) {
  products.push(productName);
  console.log(`${productName} added to inventory.`);
}

// Function to update a product name by position (index)
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
    console.log(`Product at position ${index} updated to ${newName}.`);
  } else {
    console.log("Invalid product index.");
  }
}

// Function to remove the last product
function removeLastProduct() {
  let removedProduct = products.pop();
  console.log(`${removedProduct} removed from inventory.`);
}

// Example usage:
logFirstProduct();
addProduct("Tablet");
updateProductName(1, "Smartphone");
removeLastProduct();

console.log("Final products list:", products);



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
