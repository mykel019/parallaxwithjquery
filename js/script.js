$(document).ready(function(){

	$(window).scroll(function(){
		// var navoffset = $('.header-bg').navoffset();
		var scrolltop = $(this).scrollTop();

		$('.header-bg').css('top', -(scrolltop * .7) + 'px');
		// $('.header-bg').css('top', -(scrolltop * .4) + 'px');
		
	
			$('#gallery-bg').css('top',-(scrolltop * .4) + 'px');
		
		
	});

})