// js ikon scroll
$(document).ready(function(){
	var heightNav = $(".edun").height();
	var stickyNav = function(){
		var scrollTop = $(window).scrollTop();
	if(scrollTop > heightNav){
		$(".ikon").show("fast");
	}
	else{
		$(".ikon").hide("fast");
	}
	}
	$(".ikon").click(function(){
		$("html, body").animate({scrollTop:0}, 800)
	})
	$(window).scroll(function(){
		stickyNav()
	})
});
// akhir js ikon
	
	