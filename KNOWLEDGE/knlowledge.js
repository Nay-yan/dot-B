$(document).ready(function() {
    $(".total").html($(".one-card").length);
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });
    document.getElementById("year").innerHTML = new Date().getFullYear();

    new WOW().init();

});