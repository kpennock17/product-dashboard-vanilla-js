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

function displayProducts(products) {
    productContainer.innerHTML = ''; 
    
    const productsToDisplay = products.slice(0, 5); 
    
    productsToDisplay.forEach(product => {
        const { id } = product;
        const { name, price, image } = product.fields;
        
        const displayPrice = `$${(price / 100).toFixed(2)}`;
        
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.dataset.id = id;

        card.innerHTML = `
            <img src="${image[0].url}" alt="${name}" class="product-image">
            <h3 class="product-name">${name}</h3>
            <p class="product-price">${displayPrice}</p>
        `;

        productContainer.appendChild(card);
    });
}

async function fetchProductsAsync() {
    console.log('--- Fetching Products using async/await ---');
    
    try {
        const response = await fetch(API_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const products = await response.json();
        
        console.log('Successfully fetched products with async/await.');
        
        displayProducts(products);
        
    } catch (error) {
        handleError(error);
    }
}
fetchProductsThen();
fetchProductsAsync();