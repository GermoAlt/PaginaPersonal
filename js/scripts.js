$(document).ready(function (){
    $("#header").load("./html/header.html");
    $("#footer").load("./html/footer.html");
    window.setTimeout(refreshBanners, 40)
    $("#age").html(calculateCurrentAge());
});

$(window).scroll(function(){
    $("#arrows").css("opacity", 1 - $(window).scrollTop() / 250);
});

function refreshBanners(){
    const banners = $(".banner");
    banners.hide();
    banners.show();
}

function calculateCurrentAge(){
    const dateOfBirth = new Date(1998, 1, 21);
    const differenceInMs = Date.now() - dateOfBirth.getTime();
    const calculatedDate = new Date(differenceInMs);

    return Math.abs(calculatedDate.getUTCFullYear() - 1970);
}