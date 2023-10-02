const mobileNavToggle = document.querySelector('.mobile-nav-toggle__button');
const mainSiteNav = document.querySelector('.main-nav');
const orderDate = document.querySelector('.order-summary__date');

mobileNavToggle.addEventListener('click', () => {
  mainSiteNav.classList.toggle('is-open');
  mobileNavToggle.classList.toggle('is-open');
})