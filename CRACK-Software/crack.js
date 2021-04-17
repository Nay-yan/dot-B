$(document).ready(function() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });
    document.getElementById("year").innerHTML = new Date().getFullYear();

    $("#search").on("keyup", function() {
        let keyword = $(this).val().toLowerCase();
        $(".item").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(keyword) > -1);
        })
    });
});