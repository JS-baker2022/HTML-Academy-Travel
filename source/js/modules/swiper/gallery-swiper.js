import Swiper from '../../vendor/swiper';

const sectionClassName = 'gallery__swiper';
const galleryContainer = document.querySelector(`.${sectionClassName}`);

const initGallerySlider = () => {
  if (galleryContainer) {
    return new Swiper(`[data-gallery="${sectionClassName}"]`, {
      grabCursor: true,
      speed: 600,
      slidesPerView: 4,
      spaceBetween: 30,

      navigation: {
        prevEl: `[data-gallery-prev-button="${sectionClassName}"]`,
        nextEl: `[data-gallery-next-button="${sectionClassName}"]`,
      },


    });
  }

  return null;
};

export {initGallerySlider};
