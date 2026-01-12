document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        spaceBetween: 100,
        effect: "coverflow",
        watchSlidesProgress: true,

        mousewheel: {
            forceToAxis: true,
            sensitivity: 0.7,
        },

        coverflowEffect: {
            rotate: -25,
            depth: 120,
            slideShadows: false,
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: true,
        },
    });
});
