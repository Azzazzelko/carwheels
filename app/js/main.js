$(function() {

	/* Select */

	$('.select').select2();
	$('.hits-select').select2({
		dropdownCssClass: "hits-select-select2-dropdown"
	})

	/* Dropdown */
	$('.tab-content .dropdown .dropdown-toggle').on('click', function (e) {
		e.preventDefault();
		$(this).parent().toggleClass('open');
	});

	$('.tab-dropdown-close-btn').on('click', function (e) {
		e.preventDefault();
		$(this).parent().parent().parent().toggleClass('open')
	});

	$('body').on('click', function (e) {
		if ( !$('.tab-content .dropdown').is(e.target) && $('.tab-content .dropdown').has(e.target).length === 0 && $('.open').has(e.target).length === 0 ) {
			$('.tab-content .dropdown').removeClass('open');
		};
	});

	/* check all */
	$('#check_allproducer').on('change', function(e){
		$(this).parent().parent().siblings('.row').find('input').prop('checked', this.checked);
	})

	/* filter-reset */
	$('.tab-dropdown-clear-btn').on("click", function(e){
		e.preventDefault();
		var $this = $(this);

		$this.parent().parent().find('input').attr('checked', false);
	});

	/* main hits owl */
	$('.owl-hits-slider').owlCarousel({
		margin:50,
		items:1,
		nav:true,
		dots:false,
		singleItem : true
	});

}());