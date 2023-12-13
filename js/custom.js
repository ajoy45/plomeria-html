$(document).ready(function () {

    // const btn = document.querySelector(".hamburger");
    // const icon = document.querySelector(".fa-bars");
    // const navBar = document.querySelector('.nav-links')
    // btn.addEventListener('click', () => {
    //     if (icon.classList.contains("fa-bars")) {
    //         icon.classList.replace("fa-bars", "fa-times");
    //         navBar.classList.add('header-active');
    //         navBar.style.display = "block";
    //     }
    //     else {
    //         icon.classList.replace("fa-times", "fa-bars");
    //         navBar.classList.add = "header-active";
    //         navBar.style.display = "none";

    //     }
    // })


    $('.testimonial-card').slick({
        cssEase: 'cubic-bezier(1,1,1,.95)',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 1000,
        infinite: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,


                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]



    });
});