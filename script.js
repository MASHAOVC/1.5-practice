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
let hiddenItems768 = document.querySelectorAll('.list__list-item--hidden768');
let hiddenItems1100 = document.querySelectorAll('.list__list-item--hidden1100');
let lenovoItem = document.querySelector('.hidden-showed');
let isOpen = false;

showMoreButton.addEventListener('click', function () {
    if (isOpen) {
        if (window.innerWidth >= 768 && window.innerWidth < 1100) {
            
            for (let i = 0; i < hiddenItems768.length; i++) {
                let item = hiddenItems768[i];
                item.style.display = 'none';
            }

        } else if (window.innerWidth >= 1100) {
            
            for (let i = 0; i < hiddenItems1100.length; i++) {
                let item = hiddenItems1100[i];
            item.style.display = 'none';
            }

        }

        icon.src = 'statics/icon.png';
        text.textContent = 'Показать все';
        isOpen = false;     
    } else {
        if (window.innerWidth >= 768 && window.innerWidth < 1100) {

            for (let i = 0; i < hiddenItems768.length; i++) {
                let item = hiddenItems768[i];
                item.style.display = 'flex';
            }
        
        } else if (window.innerWidth >= 1100) {

            for (let i = 0; i < hiddenItems1100.length; i++) {
                let item = hiddenItems1100[i];
            item.style.display = 'flex';
        }

    }
    
        icon.src = 'statics/icon-close.png';
        text.textContent = 'Скрыть';    
        isOpen = true;
    }
});