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
                // $(".overight-navbar").css({ "position": "fixed", "background": "var(--smallyellow)", "box-shadow": "0px 4px 4px rgba(0, 0, 0, 0.25)" });
                $(".overight-navbar").addClass("overight-navbar-scroll");
            } else {
                $(".overight-navbar").removeClass("overight-navbar-scroll");
                // $(".overight-navbar").css({ "position": "absolute", "background": "none", "box-shadow": "none" });
            }
        });

});