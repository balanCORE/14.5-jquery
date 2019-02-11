(function(){ 

	var accordionJQuery = function(){
		console.log($('.accordion h3'));
			$('.accordion h3').click(function(){
				$(this).addClass('active');
				$(this).siblings().removeClass('active');
			})
		};
		
	accordionJQuery();
	
})(); 