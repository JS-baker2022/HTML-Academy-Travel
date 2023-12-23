import Swiper from '../../vendor/swiper';

const sectionClassName = 'tours__swiper';
const heroContainer = document.querySelector(`.${sectionClassName}`);

const initToursSlider = () => {
  if (heroContainer) {
    return new Swiper(`[data-tours="${sectionClassName}"]`, {
      grabCursor: true,
      speed: 600,
      slidesPerView: 3,
      spaceBetween: 30,

      navigation: {
        prevEl: `[data-tours-prev-button="${sectionClassName}"]`,
        nextEl: `[data-tours-next-button="${sectionClassName}"]`,
      },


    });
  }

  return null;
};

export {initToursSlider};
