const detailJackets = document.getElementById("jacket-details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const url = "https://api.noroff.dev/api/v1/rainy-days/" + id;

async function fetchJacket (){

  try {
    const response = await fetch(url);
    const details = await response.json();

    console.log(details);  

    createHtml(details);

  }

  catch (error){
    console.log(error);

  }

  fetchJacket();

  function createHtml(details) {
    detailJackets.innerHTML = `<div class="content">
                                <h2>${details.title}</h1>
                                <h4>${details.id}</h2>
                                <h3>${details.gender}</h3>
                                <img src="${details.image}"></img>
                                <p>${details.description}</p>
                                 </div>`; 
  }}
