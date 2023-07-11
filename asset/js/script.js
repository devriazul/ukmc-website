//  Testimonial Script 

  var testimonialSlider = new Swiper('.testimonial-slider', {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  var nextButton = document.querySelector('.swiper-button-next');
  nextButton.style.display = 'none';

  testimonialSlider.on('reachEnd', function () {
    nextButton.style.display = 'block';
  });

  testimonialSlider.on('slideChange', function () {
    if (testimonialSlider.isEnd) {
      nextButton.style.display = 'none';
    } else {
      nextButton.style.display = 'block';
    }
  });

/* Logo Carousel of Awarding body JS */

  var logoSlider = new Swiper('.logo-slider', {
    slidesPerView: 5,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

/* Our Latest News JS */


  var newsSlider = new Swiper('.news-slider', {
    slidesPerView: 4,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });