$(document).ready(function() {

  $(window).resize(function() {
    if ($(document).width() > 714)
      $(".responsive-menu").css("height", "0px");
		$(".responsive-menu").removeClass("menu-border");
  });

  var menu = $(".menu").html();
  $(".responsive-menu").append(menu);
  $(".responsive-menu ul").removeClass("main-menu");
  $(".responsive-menu ul").addClass("mobile-menu");
  

  $(".mobile-menu-icon").click(function() {
	$(".responsive-menu").toggleClass("menu-border");
    var respMenu = $(".responsive-menu");
    var height = (respMenu.css("height") == "190px") ? "0px" : "190px";
    respMenu.animate({
      height: height
    }, 100);
  });

});
