
$(document).ready(function () {

    $('.testimonial-card-wrapper').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.service-area-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 300,
        // autoplay: true,
        arrows: true,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },

            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }

        ]

    });
    // pricing tab checkbox
    document.getElementById("checkbox").addEventListener("click", function () {
        const element = document.getElementById("checkbox");
        element.setAttribute("src", "./image/home-page/checkbox2.png")
    });
});