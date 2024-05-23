new Swiper('.swiper-container', {

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

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

    breakpoints: {  
        320: {
          slidesPerView: 1.3,
        },
        380: {
          slidesPerView: 1.6,
        },
        440: {
          slidesPerView: 1.8,
        },
        500: {
          slidesPerView: 2,
        },
        560: {
            slidesPerView: 2.3,
        },
        640: {
          slidesPerView: 3,
        },
        768: {
          enabled: false,
        },
      },
    });


let showMoreButton = document.querySelector('.show-more');
let [icon, text] = showMoreButton.children;
let isOpen = false;

showMoreButton.addEventListener('click' function () {
    if (isOpen) {

        if (window.innerWidth >= 768 && window.innerWidth < 1060) {


        } else if (window.innerWidth >= 1060) {

        }
    
    icon.src = 'statics\icon-close.png';
    text.textContent = 'Скрыть'    
    isOpen = true;
    }

});