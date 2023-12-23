import Swiper from '../../vendor/swiper';

const sectionClassName = 'advantage__swiper';
const advantageContainer = document.querySelector(`.${sectionClassName}`);

const initAdvantageSlider = () => {
  if (advantageContainer) {
    return new Swiper(`[data-advantage="${sectionClassName}"]`, {
      grabCursor: true,
      speed: 600,
      slidesPerView: 'auto',
      spaceBetween: 30,

      navigation: {
        prevEl: `[data-advantage-prev-button="${sectionClassName}"]`,
        nextEl: `[data-advantage-next-button="${sectionClassName}"]`,
      },


    });
  }

  return null;
};

export {initAdvantageSlider};
