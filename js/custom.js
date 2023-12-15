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
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000, // Set the duration between slides in milliseconds
        speed: 3000,
        infinite: true,
        swipe:true,
         responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,


                }
            },
            {
                breakpoint: 768,
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