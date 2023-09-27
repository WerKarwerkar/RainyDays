const loadingIndicator = document.getElementById("loading-indicator");
const detailJackets = document.getElementById("jacket-details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  showError("Jacket ID is not found in the query string");
} else {
  url = "https://api.noroff.dev/api/v1/rainy-days/" + id;
  loadingIndicator.style.display = "block";

  async function fetchJacket() {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch jackets with that id');
      }
      const details = await response.json();
      createHtml(details);
      document.title = details.title;
    } catch (error) {
      showError(error.message);
    } finally {
      loadingIndicator.style.display = "none";
    }
  }

  fetchJacket();

  function showError(message) {
    const errorContainer = document.getElementById("jacket-details");
    errorContainer.innerHTML = `<h2>Error: ${message}</h2>`;
  }

  function createHtml(details) {
    detailJackets.innerHTML = `<div class="content">
                              <h2 style="color: #0A3641; text-align: center;">${details.title}</h2>
                              <h3 style="color: #0A3641; text-align: center;">${details.gender}</h3>
                              <img src="${details.image}" alt="${details.title}" style="display: block; margin: 0 auto; width: 650px; height: 750px;"/>
                              <h4 style="color: #0A3641; text-align: center;">${details.description}</h4>
                              <button class="price-button">${details.price}</button>
                              </div>`;
    document.title = details.title;
  }
}

