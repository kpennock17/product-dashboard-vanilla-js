const API_URL = 'https://www.course-api.com/javascript-store-products';
const productContainer = document.getElementById('product-container');

function handleError(error) {
    console.error('Fetch Error:', error);
    productContainer.innerHTML = `<h2 style="color: red;">An error occurred: ${error.message}</h2>`;
}

