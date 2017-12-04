$(document).ready(function () {

	$('button').on('click', function(){
		$(this).closest('li').remove()	
	});

});