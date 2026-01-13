document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper(".swiper", {
        slidesPerView: 'auto',
        centeredSlides: true,

        loop: true,

        grabCursor: true,
        spaceBetween: 100,
        effect: "coverflow",
        watchSlidesProgress: false,

        mousewheel: {
            forceToAxis: true,
            sensitivity: 0.7,
        },

        coverflowEffect: {
            rotate: -25,
            stretch: 0,
            depth: 120,
            modifier: 1,
            slideShadows: false,
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            type: 'bullets',
            clickable: true,
        }
    });
    const flash = document.getElementById("flash");

    function randomFlash() {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;

        flash.style.left = x + "px";
        flash.style.top = y + "px";

        flash.classList.remove("fade");
        void flash.offsetWidth;
        flash.classList.add("fade");
    }

    function loop() {
        randomFlash();
        const delay = 500 + Math.random() * 1500;
        setTimeout(loop, delay);
    }

    loop();
});
