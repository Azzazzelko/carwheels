$(function() {

	/* Select */

	$('.select').select2();

	/* Dropdown */
	$('.tab-content .dropdown .dropdown-toggle').on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('open');
	});

	$('body').on('click', function (e) {
		if ( !$('.tab-content .dropdown').is(e.target) && $('.tab-content .dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0 ) {
			$('.tab-content .dropdown').removeClass('open');
		};
	});

}());