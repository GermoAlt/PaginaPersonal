$(document).ready(function (){
    $("#header").load("header.html");
    $("#footer").load("footer.html");
    console.log("test")
});
$(window).scroll(function(){
    $("#arrows").css("opacity", 1 - $(window).scrollTop() / 250);
});