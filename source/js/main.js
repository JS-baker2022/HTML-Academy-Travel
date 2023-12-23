import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import './header/locomotive-scroll';
import {Burger} from './header/burger';
import {StickyHeader} from './header/sticky-header';
import {initLocomotiveScroll} from './header/init-locomotive-scroll';
import {initHeroSlider} from './modules/swiper/hero-swiper';
import {initToursSlider} from './modules/swiper/tours-swiper';
import {initTrainingSlider} from './modules/swiper/training-swiper';
import {initReviewsSlider} from './modules/swiper/reviews-swiper';
import {initAdvantageSlider} from './modules/swiper/advantage-swiper';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initLocomotiveScroll();
  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    const burger = new Burger();
    burger.init();
    const stickyHeader = new StickyHeader();
    stickyHeader.init();
    initHeroSlider();
    initToursSlider();
    initTrainingSlider();
    initReviewsSlider();
    initAdvantageSlider();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
