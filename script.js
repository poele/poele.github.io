
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



