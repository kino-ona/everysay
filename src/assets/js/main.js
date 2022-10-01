
$(document).ready(function() {
	$('.main_container').find('.keyvisual').addClass('is-active')
});

var keySwiper = new Swiper('#keyvisual', {
  effect: 'fade',
  slidesPerView: 1,
  spaceBetween: 0,
  paginationClickable: true,
  keyboard: true,
  speed: 800,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
});

var qnaSwiper = new Swiper('#qnaswipe', {
  slidesPerView: 1,
  spaceBetween: 0,
  paginationClickable: true,
  keyboard: true,
  speed: 800,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: {
    nextEl: ".sec_qna .swiper-button-next",
    prevEl: ".sec_qna .swiper-button-prev",
  },
  pagination: {
		el: '.sec_qna .swiper-pagination',
		type: 'bullets',
		clickable: true
	},
});

var faqwiper = new Swiper('#faqswipe', {
  slidesPerView: 1.9,
  spaceBetween: 15,
  paginationClickable: true,
  keyboard: true,
  speed: 400,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 79,
      loop: false,
      centeredSlides: false,
    }
  }
  
});