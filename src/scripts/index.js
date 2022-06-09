const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    direction: 'horizontal',
    loop: true,

    pagination: {
      el: '.reviews__slider-feedback-pagination',
      clickable: true,

    },

    navigation: {
      nextEl: '.reviews__slider-feedback-button-next',
      prevEl: '.reviews__slider-feedback-button-prev',
    },

  });
