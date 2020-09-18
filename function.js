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


// $(document).ready(function() {
//     $(".dropdown").hover(function() {
//         var dropdownMenu = $(this).children(".dropdown-menu");
//         if (dropdownMenu.is(":visible")) {
//             dropdownMenu.parent().toggleClass("open");
//         }
//     });
// });

// $('.slider').slick({
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
// });


$('.slicky-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: true
            }
        }, {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick "
        // instead of a settings object
    ]
});