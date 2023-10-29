const url = "https://www.weronkakarczmarczyk.no/wp-json/wc/store/products";
const detailContainer = document.getElementById("results");

function showError(message) {
  const errorContainer = document.getElementById("results");
  errorContainer.innerHTML = `<h2>Error: ${message}</h2>`;
}

async function fetchJackets() {
  try {
    const loadingIndicator = document.getElementById("loading-indicator");
    loadingIndicator.style.display = "block";

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch Jackets');
    }
    const result = await response.json();

    detailContainer.innerHTML = "";
    const jackets = result;

    for (let i = 0; i < jackets.length; i++) {
      const jacket = jackets[i];

      detailContainer.innerHTML += `<a href="single-product.html?id=${jacket.id}" class="card">
                                    <h2>${jacket.name}</h2>
                                    <img src="${jacket.images[0].src}" alt="${jacket.name}" class="imgMobile" />
                                    <h3>${"Price"} ${jacket.prices.price} ${jacket.prices.currency_code}</h3>
                                    <button class="price-button">${"Buy Now"}</button>                        
                                    </a>`;
    }

    loadingIndicator.style.display = "none";
  } catch (error) {
    showError(error.message); 
  }
}

fetchJackets();


