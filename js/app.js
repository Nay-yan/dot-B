$(document).ready(function() {

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });

    let screenHeight = $(window).height();
    console.log(screenHeight);

    $(window).scroll(
        function() {
            let currentPosition = $(this).scrollTop();
            console.log(currentPosition);
            if (currentPosition >= screenHeight - 300) {
                $(".overight-navbar").addClass("overight-navbar-scroll");
            } else {
                $(".overight-navbar").removeClass("overight-navbar-scroll");
            }
        });

    document.getElementById("year").innerHTML = new Date().getFullYear();

    new WOW().init();
    $('.counter').counterUp({
        delay: 10,
        time: 500
    });


});