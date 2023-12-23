import Swiper from '../../vendor/swiper';

const sectionClassName = 'reviews__swiper';
const reviewsContainer = document.querySelector(`.${sectionClassName}`);

const initReviewsSlider = () => {
  if (reviewsContainer) {
    return new Swiper(`[data-reviews="${sectionClassName}"]`, {
      grabCursor: true,
      speed: 600,
      slidesPerView: 'auto',
      spaceBetween: 30,

      navigation: {
        prevEl: `[data-reviews-prev-button="${sectionClassName}"]`,
        nextEl: `[data-reviews-next-button="${sectionClassName}"]`,
      },


    });
  }

  return null;
};

export {initReviewsSlider};
