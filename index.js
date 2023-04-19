// JavaScript code for shopping app

// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Cart items array to store added products
const cartItems = [];

// Function to handle "Add to Cart" button click event
function addToCart(event) {
  const productId = event.target.dataset.id; // Get the product ID from the data-id attribute
  const product = getProductById(productId); // Get the product object based on the ID
  if (product) {
    cartItems.push(product); // Add the product to the cartItems array
    updateCart(); // Update the cart UI
  }
}

// Function to get product object based on the ID
function getProductById(id) {
  // Replace this with your own logic to fetch product data (e.g. from a server or local storage)
  // In this example, we'll use a static product data
  const products = [
    { id: '1', name: 'Product 1', price: 19999 },
    { id: '2', name: 'Product 2', price: 24999 },
    { id: '3', name: 'Product 3', price: 149999 },
    { id: '4', name: 'Product 4', price: 14999 },
    { id: '5', name: 'Product 5', price: 9999 },
    { id: '6', name: 'Product 6', price: 49999 }
  ];
  return products.find(product => product.id === id);
}

// Function to update the cart UI
function updateCart() {
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = ''; // Clear the cart list
  let totalAmount = 0; // Variable to calculate total amount
  cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - Rs.${item.price.toFixed(2)}`;
    cartList.appendChild(li); // Add cart item to the cart list
    totalAmount += item.price; // Add product price to total amount
  });
  const totalAmountElement = document.getElementById('total-amount');
  totalAmountElement.innerHTML = `Total: Rs.${totalAmount.toFixed(2)}`; // Update total amount in the cart
}

// Get the "Checkout" button
const checkoutButton = document.getElementById('checkout-btn');

// Add click event listener to the "Checkout" button
checkoutButton.addEventListener('click', checkout);

// Function to handle "Checkout" button click event
function checkout() {
  // Replace this with your own logic to process the checkout (e.g. sending order to server)
  // In this example, we'll just display an alert with the total amount
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);
  alert(`Total amount: Rs.${totalAmount.toFixed(2)}`);
}
