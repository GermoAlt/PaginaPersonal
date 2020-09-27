$(document).ready(function (){
    $("#header").load("./html/header.html");
    $("#footer").load("./html/footer.html");
    console.log("test")
});
$(window).scroll(function(){
    $("#arrows").css("opacity", 1 - $(window).scrollTop() / 250);
});