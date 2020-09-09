// $("[data-trigger]").on("click", function() {
//     var trigger_id = $(this).attr('data-trigger');
//     $(trigger_id).toggleClass("show");
//     $('body').toggleClass("offcanvas-active");
// });

// // close button 
// $(".btn-close").click(function(e) {
//     $(".navbar-collapse").removeClass("show");
//     $("body").removeClass("offcanvas-active");
// });


$(document).ready(function() {
    $(".dropdown").hover(function() {
        var dropdownMenu = $(this).children(".dropdown-menu");
        if (dropdownMenu.is(":visible")) {
            dropdownMenu.parent().toggleClass("open");
        }
    });
});