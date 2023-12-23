import Swiper from '../../vendor/swiper';

const sectionClassName = 'training__swiper';
const trainingContainer = document.querySelector(`.${sectionClassName}`);

const initTrainingSlider = () => {
  if (trainingContainer) {
    return new Swiper(`[data-training="${sectionClassName}"]`, {
      grabCursor: true,
      speed: 600,
      slidesPerView: 4,
      spaceBetween: 30,

      navigation: {
        prevEl: `[data-training-prev-button="${sectionClassName}"]`,
        nextEl: `[data-training-next-button="${sectionClassName}"]`,
      },


    });
  }

  return null;
};

export {initTrainingSlider};
