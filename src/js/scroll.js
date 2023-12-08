const scrollUpBtn = document.querySelector('.scroll-up-btn');
const arrowUp = scrollUpBtn.querySelector('.fa-arrow-up');
const footerSection = document.querySelector('.footer');

function showScrollUpArrow() {
	if (window.scrollY >= 300) {
		scrollUpBtn.style.display = 'block';
	} else {
		scrollUpBtn.style.display = 'none';
	}
	const currentSection = window.scrollY;
	if (footerSection.offsetTop <= currentSection + 800) {
		arrowUp.style.color = '#0061e0';
	} else {
		arrowUp.style.color = '#ee2027';
	}
}
window.addEventListener('scroll', showScrollUpArrow);
