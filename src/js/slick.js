$('.slider-for').slick({
	slidesToShow: 1,
	slidesToScroll: 3,
	arrows: false,
	fade: true,
	asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
	slidesToShow: 2,
	slidesToScroll: 5,
	asNavFor: '.slider-for',
	dots: true,
	centerMode: true,
	focusOnSelect: true,
});
