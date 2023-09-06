const url = "https://api.noroff.dev/api/v1/rainy-days";
const detailContainer = document.getElementById("results");


async function fetchJackets (){
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result);  

    detailContainer.innerHTML = "";
    const jackets = result;

    for (let i = 0; i < jackets.length; i++) {
        const jackets = result[i];


        detailContainer.innerHTML += `<a href="single-product.html?id=${jackets.id}" class="card">
                                    <h2>${jackets.title}</h1>
                                    <h4>${jackets.id}</h2>
                                    <h3>${jackets.gender}</h3>
                                    <img src="${jackets.image}">${jackets.image}</img>
                                    <p>${jackets.description}</p>
                                    </a>`;


  }} catch (error){
    console.log(error);
  }}

  fetchJackets();
