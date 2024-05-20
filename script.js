new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    slidesPerView: 1.3,

    spaceBetween: 16,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    loop: true,
});