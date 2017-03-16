$(function() {

	/* Select */
	$('.select').select2();
	$('.hits-select').select2({
		dropdownCssClass: "hits-select-select2-dropdown"
	})
	$('.card-select').select2({
		dropdownCssClass: "card-select-select2-dropdown"
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

	/* all sizes btn */
	$('.card-block__info-sizes-btn').on('click', function(e){
		$('a[href=#sizes]').click();
	});

	/* circle text */
	if ( $('.wheel-circle-text').length ){
		/* init */
		var sel1 = $('#selWidth').val();
		var sel2 = $('#selHeight').val();
		var sel3 = $('#selDiameter').val();

		if(sel1 < 100)
		{
			$("#wheel-circle-text").html(sel1 + '&nbsp;x&nbsp;' + sel2 + '&nbsp;R' + sel3);
		}
		else
		{
			$("#wheel-circle-text").html(sel1 + '&nbsp;/&nbsp;' + sel2 + '&nbsp;R' + sel3);
		}

		$('#wheel-circle-text').circleType({radius: 245});

		/* on change */
		$('#selWidth').on('change', function(){
			var sel1 = $('#selWidth').val();
			var sel2 = $('#selHeight').val();
			var sel3 = $('#selDiameter').val();
			if(sel1 < 100)
			{
				$("#wheel-circle-text").html(sel1 + '&nbsp;x&nbsp;' + sel2 + '&nbsp;R' + sel3);
			}
			else
			{
				$("#wheel-circle-text").html(sel1 + '&nbsp;/&nbsp;' + sel2 + '&nbsp;R' + sel3);
			}
			$('#wheel-circle-text').circleType({radius: 245});
		});
		$('#selHeight').on('change', function(){
			var sel1 = $('#selWidth').val();
			var sel2 = $('#selHeight').val();
			var sel3 = $('#selDiameter').val();
			if(sel1 < 100)
			{
				$("#wheel-circle-text").html(sel1 + '&nbsp;x&nbsp;' + sel2 + '&nbsp;R' + sel3);
			}
			else
			{
				$("#wheel-circle-text").html(sel1 + '&nbsp;/&nbsp;' + sel2 + '&nbsp;R' + sel3);
			}
			$('#wheel-circle-text').circleType({radius: 245});
		});
		$('#selDiameter').on('change', function(){
			var sel1 = $('#selWidth').val();
			var sel2 = $('#selHeight').val();
			var sel3 = $('#selDiameter').val();
			if(sel1 < 100)
			{
				$("#wheel-circle-text").html(sel1 + '&nbsp;x&nbsp;' + sel2 + '&nbsp;R' + sel3);
			}
			else
			{
				$("#wheel-circle-text").html(sel1 + '&nbsp;/&nbsp;' + sel2 + '&nbsp;R' + sel3);
			}
			$('#wheel-circle-text').circleType({radius: 245});
		});

		/* hovers */
		$('#select2-selWidth-container').parent().on('mouseover', function(){
			var sel1 = $('#selWidth').val();
			var n1 = sel1.length;
			for(var i=1;i<=n1;i++){
				$('.char'+i).css('color', '#225aa4');
			}
		});
		$('#select2-selWidth-container').parent().on('mouseout', function(){
			var sel1 = $('#selWidth').val();
			var n1 = sel1.length;
			for(var i=1;i<=n1;i++){
				$('.char'+i).css('color', '#fff');
			}
		});	
		$('#select2-selWidth-container').parent().on('click', function(){
			$('#select2-selWidth-results').on('mouseover', function(){
				var sel1 = $('#selWidth').val();
				var n1 = sel1.length;
				for(var i=1;i<=n1;i++){
					$('.char'+i).css('color', '#225aa4');
				}
			});
			$('#select2-selWidth-results').on('mouseout', function(){
				var sel1 = $('#selWidth').val();
				var n1 = sel1.length;
				for(var i=1;i<=n1;i++){
					$('.char'+i).css('color', '#fff');
				}
			});
		});

		$('#select2-selHeight-container').parent().on('mouseover', function(){
			var sel1 = $('#selWidth').val();
			var sel2 = $('#selHeight').val();
			var n1 = sel1.length;
			var n2 = sel2.length;
			var start = 1 + n1 + 3;
			var end = start + n2;
			for(var i=start;i<end;i++){
				$('.char'+i).css('color', '#225aa4');
			}
		});
		$('#select2-selHeight-container').parent().on('mouseout', function(){
			var sel1 = $('#selWidth').val();
			var sel2 = $('#selHeight').val();
			var n1 = sel1.length;
			var n2 = sel2.length;
			var start = 1 + n1 + 3;
			var end = start + n2;
			for(var i=start;i<end;i++){
				$('.char'+i).css('color', '#fff');
			}
		});
		$('#select2-selHeight-container').parent().on('click', function(){
			$('#select2-selHeight-results').on('mouseover', function(){
				var sel1 = $('#selWidth').val();
				var sel2 = $('#selHeight').val();
				var n1 = sel1.length;
				var n2 = sel2.length;
				var start = 1 + n1 + 3;
				var end = start + n2;
				for(var i=start;i<end;i++){
					$('.char'+i).css('color', '#225aa4');
				}
			});
			$('#select2-selHeight-results').on('mouseout', function(){
				var sel1 = $('#selWidth').val();
				var sel2 = $('#selHeight').val();
				var n1 = sel1.length;
				var n2 = sel2.length;
				var start = 1 + n1 + 3;
				var end = start + n2;
				for(var i=start;i<end;i++){
					$('.char'+i).css('color', '#fff');
				}
			});
		});

		$('#select2-selDiameter-container').parent().on('mouseover', function(){
			var sel1 = $('#selWidth').val();
			var sel2 = $('#selHeight').val();
			var sel3 = $('#selDiameter').val();
			var n1 = sel1.length;
			var n2 = sel2.length;
			var n3 = sel3.length;
			var start = 1 + n1 + 3 + n2 + 1;
			var end = start + 1 + n3;
			for(var i=start;i<end;i++){
				$('.char'+i).css('color', '#225aa4');
			}
		});
		$('#select2-selDiameter-container').parent().on('mouseout', function(){
			var sel1 = $('#selWidth').val();
			var sel2 = $('#selHeight').val();
			var sel3 = $('#selDiameter').val();
			var n1 = sel1.length;
			var n2 = sel2.length;
			var n3 = sel3.length;
			var start = 1 + n1 + 3 + n2 + 1;
			var end = start + 1 + n3;
			for(var i=start;i<end;i++){
				$('.char'+i).css('color', '#fff');
			}
		});
		$('#select2-selDiameter-container').parent().on('click', function(){
			$('#select2-selDiameter-results').on('mouseover', function(){
				var sel1 = $('#selWidth').val();
				var sel2 = $('#selHeight').val();
				var sel3 = $('#selDiameter').val();
				var n1 = sel1.length;
				var n2 = sel2.length;
				var n3 = sel3.length;
				var start = 1 + n1 + 3 + n2 + 1;
				var end = start + 1 + n3;
				for(var i=start;i<end;i++){
					$('.char'+i).css('color', '#225aa4');
				}
			});
			$('#select2-selDiameter-results').on('mouseout', function(){
				var sel1 = $('#selWidth').val();
				var sel2 = $('#selHeight').val();
				var sel3 = $('#selDiameter').val();
				var n1 = sel1.length;
				var n2 = sel2.length;
				var n3 = sel3.length;
				var start = 1 + n1 + 3 + n2 + 1;
				var end = start + 1 + n3;
				for(var i=start;i<end;i++){
					$('.char'+i).css('color', '#fff');
				}
			});
		});	
	};

}());