$( "#ventures>div>ul>li" )
.mouseenter(function() {
    $( this ).find(".hover").stop().animate({top: "0"}, 150);
});
$( "#ventures>div>ul>li" )
.mouseleave(function() {
	    $( this ).parent().find(".hover").stop().animate({top: "-100%"});
});




$( "#team>div>ul>li>div" )
.mouseenter(function() {
    $( this ).find(".hover").stop().animate({top: "0"}, 150);
});
$( "#team>div>ul>li>div" )
.mouseleave(function() {
	    $( this ).parent().find(".hover").stop().animate({top: "-100%"});
});