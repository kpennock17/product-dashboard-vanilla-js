const API_URL = 'https://www.course-api.com/javascript-store-products';
const productContainer = document.getElementById('product-container');

function handleError(error) {
    console.error('Fetch Error:', error);
    productContainer.innerHTML = `<h2 style="color: red;">An error occurred: ${error.message}</h2>`;
}

function fetchProductsThen() {
    console.log('--- Fetching Products using .then() ---');
    
    fetch(API_URL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(products => {
            console.log('Successfully fetched products with .then():');
            products.forEach(product => {
                console.log(`Product Name (.then()): ${product.fields.name}`);
            });
        })
        .catch(error => {
            console.error('Error in fetchProductsThen:', error);
        });
}

