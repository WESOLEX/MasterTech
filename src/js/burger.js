const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');
const showListOfServicesBtn = document.querySelector('.show-list-of-services-btn');
let burgerMenu = document.getElementById('#options');
const burgerMenuElements = document.querySelectorAll('.nav-option-onburger');
const offerOptionBurger = burgerMenu.querySelector('.offer-option-burger');
let listOfServices = offerOptionBurger.querySelector('.list-of-services');
const arrowItem = showListOfServicesBtn.querySelector('.fa-arrow-left');

function burgerMenuClose() {
	burgerMenu.classList.remove('nav-options-onburger-show');
	listOfServices.classList.remove('list-of-services-show');
}

burgerBtn.addEventListener('click', () => {
	burgerMenu.classList.add('nav-options-onburger-show');
});

closeBtn.addEventListener('click', burgerMenuClose);
burgerMenuElements.forEach(element => {
	element.addEventListener('click', burgerMenuClose);
});

showListOfServicesBtn.addEventListener('click', () => {
	console.log(window.scrollY);
	listOfServices.classList.toggle('list-of-services-show');
	arrowItem.classList.toggle('arrow-rotate');
});
function hideBurgerMenu() {
	if (window.scrollY >= 300) {
		burgerMenuClose();
	}
}
window.addEventListener('scroll', hideBurgerMenu);
