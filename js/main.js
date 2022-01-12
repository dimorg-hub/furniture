
$('.what__list').slick({
	dots: false,
	arrows: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1400,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 900,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		}
	]
});
$('.star__list').slick({
	dots: false,
	arrows: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1440,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		}
	]
});

if (window.innerWidth <= 768) {
	$('.header__burger, .nav__link').click(function () {
		$('.header__burger,.nav__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
}

