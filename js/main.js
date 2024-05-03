document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    hamburger.addEventListener('click', function() {
        nav.classList.toggle('active');
        if (hamburger.innerHTML === '☰') {
            hamburger.innerHTML = '✕'; 
        } else {
            hamburger.innerHTML = '☰'; 
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header__navbar');
  const headerOffset = header.offsetTop; 

  function scrollHandler() {
      if (window.pageYOffset > headerOffset) {
          header.classList.add('fixed-header');
      } else {
          header.classList.remove('fixed-header');
      }
  }

  window.addEventListener('scroll', scrollHandler);
});

const swiper = new Swiper('.swiper', {
  effect: 'flip',
  flipEffect: {
    slideShadows: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
    autoplay: {
      delay: 3000, 
      disableOnInteraction: false, 
    },
  });
  const swiper3 = new Swiper('.swiper3', {
    effect: 'flip',
    flipEffect: {
      slideShadows: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 1500, 
      disableOnInteraction: false, 
    },
    a11y: {
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
    },
  });
  