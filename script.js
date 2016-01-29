
$(window).resize(function(e) {
	if($(window).width() < 745) {
		$(".NY").text("NY");
		$(".LA").text("LA");
	}
	if($(window).width() > 745) {
		$(".NY").text("NEW YORK");
		$(".LA").text("LOS ANGELES");
	}
})

$(window).load(function(){
	if($(window).width() < 745) {
		$(".NY").text("NY");
		$(".LA").text("LA");
	}

})

$('.skills').flowtype({
   minimum   : 200,
   maximum   : 1200,
   minFont   : 9,
   maxFont   : 55,
   fontRatio : 70
});



$('.secondary-titles').flowtype({
   minimum   : 100,
   maximum   : 500,
   minFont   : 8,
   maxFont   : 40,
   fontRatio : 35
})

$('.secondary-text').flowtype({
   minimum   : 100,
   maximum   : 500,
   minFont   : 7,
   maxFont   : 14,
   fontRatio : 30
})

$('.locations').flowtype({
   minimum   : 100,
   maximum   : 500,
   minFont   : 8,
   maxFont   : 14,
   fontRatio : 30
})

$('.end').flowtype({
   minimum   : 200,
   maximum   : 500,
   minFont   : 10,
   maxFont   : 14,
   fontRatio : 30
})

