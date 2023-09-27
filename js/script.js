const url = "https://api.noroff.dev/api/v1/rainy-days";
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
                                    <h2 style="color: #0A3641; text-align: center;">${jacket.title}</h2>
                                    <h3 style="color: #0A3641; text-align: center;">${jacket.gender}</h3>
                                    <img src="${jacket.image}" alt="${jacket.title}" style="display: block; margin: 20px auto; width: 650px; height: 750px;"/>
                                    <button class="price-button">${jacket.price}</button>                        
                                    </a>`;
    }

    loadingIndicator.style.display = "none";
  } catch (error) {
    showError(error.message); 
  }
}

fetchJackets();


