$(function(){
  // Слайдер BEGIN-CODE
  $('.slider__box').slick({
    autoplay: true,  // Автовоспроизведение слайдера
    fade: true,       // Плавность смены слайдов
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="images/icons/arrow-left.svg" alt="arrow-left">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="images/icons/arrow-right.svg" alt="arrow-right">',
    responsive: [
    {
      breakpoint: 481,
      settings: {
       arrows: false  // отключаем стрелки при max-width: 480px
      }
    }
  ]
  });
    // Слайдер END-CODE
    
    // Меню адаптива
    $('.menu-btn').on('click', function(){
      $('.menu__list').toggleClass('active');
    });
});