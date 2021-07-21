$(document).ready(function() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });
    document.getElementById("year").innerHTML = new Date().getFullYear();

    //scroll Nav
    let screenHeight = $(window).height();
    // console.log(screenHeight);
    $(window).scroll(function() {
        let scrollHeight = $(this).scrollTop();
        // console.log(scrollHeight);

        if (scrollHeight >= screenHeight - 500) {
            $('.navbar-light').addClass("scrollNav-none");
        } else {
            $('.navbar-light').removeClass("scrollNav-none");

        }
    });
});

var scrollBtn = document.getElementById("scrollTop");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};