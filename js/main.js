function toggleNav(hamburger, nav, body) {
  if (nav.isAnimating) return;
  nav.isAnimating = true;

  if (nav.classList.contains('active')) {
    hamburger.classList.remove('rotated'); 
    hamburger.innerHTML = '☰'; 
    nav.style.animation = 'burger-menu-hide 0.7s forwards';
    nav.addEventListener('animationend', () => {
      nav.classList.remove('active');
      body.style.overflow = 'auto';
      nav.isAnimating = false;
    }, { once: true });
  } else {
    hamburger.classList.add('rotated'); 
    hamburger.innerHTML = '✕'; 
    nav.classList.add('active');
    nav.style.animation = 'burger-menu-show 0.7s forwards';
    body.style.overflow = 'hidden';
    nav.addEventListener('animationend', () => {
      nav.isAnimating = false;
    }, { once: true });
  }
}

function handleHeaderScroll(header, mainContent, nav) {
  const headerOffset = header.offsetTop;
  window.addEventListener('scroll', function() {
    let currentScrollPosition = window.pageYOffset;
    if (currentScrollPosition > headerOffset) {
      header.classList.add('fixed-header');
      mainContent.style.paddingTop = header.offsetHeight + 'px';
      nav.style.top = '80px';
    } else {
      header.classList.remove('fixed-header');
      mainContent.style.paddingTop = '0px';
      nav.style.top = '124px';
    }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');
  const body = document.body;
  const header = document.querySelector('.header__navbar');
  const mainContent = document.querySelector('.main');

  hamburger.addEventListener('click', function() {
    toggleNav(hamburger, nav, body);
  });

  handleHeaderScroll(header, mainContent, nav);
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

