/*$(Document).ready(function(){
    $("h1").click(function(){
        $("this").css("background-color", "red");
    });
});
*/


/*--- scroll animations-----*/

 $(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000);
				return false;
			}
		}
	});
});

/*--- scroll animations-----*/
$(".js--scroll-to-project").click(function(){
    $("html,body").animate({scrollTop: $(".js--project").offset().top},1000);
});

$(".js--scroll-to-skill").click(function(){
    $("html,body").animate({scrollTop: $(".js--skill").offset().top},1000);
});

$(".js--scroll-to-contact").click(function(){
    $("html,body").animate({scrollTop: $(".js--contact").offset().top},1000);
});

$(".js--scroll-to-main").click(function(){
    $("html,body").animate({scrollTop: $(".js--main").offset().top},1000);
});





 /*----------------mobile navigation-------------------------------*/ 

/*---   mobi navigation ----*/
/*- jab javascript use kr rhe hai to usi ki class leni hai js--..  ---*/

$(".js--nav-icon").click(function(){
    var nav = $(".js--navbar  ");
    var icon = $(".js--nav-icon i")
                         
 
 
  nav.slideToggle(200);
  if(icon.hasClass("ion-navicon-round")){
    icon.addClass("ion-ios-close");
    icon.removeClass("ion-navicon-round");
  }
    else{
        icon.addClass("ion-navicon-round");
        icon.removeClass("ion-ios-close");
    }

});

 /*---------------------end--------------------------*/ 







