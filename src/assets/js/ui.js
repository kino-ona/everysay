// scroll animate
var isVisible = false;
var lastScrollTop = 0;
$(window).on('scroll',function() {
	var st = $(this).scrollTop();

  if(st < 100) {
    $('.main_container').find('.section').removeClass('is-active')
  }

  if($('.main_container').find('.section').length > 0) {

    $('.main_container').find('.section').each(function(){
      if (checkVisible($(this))&&!isVisible) {
        $(this).addClass('is-active');

        // isVisible=true;
      }
    });

  };
});
var checkVisible = function(elm, eval){
	eval = eval || "object visible";
	var viewportHeight = $(window).height(), // Viewport Height
			scrolltop = $(window).scrollTop() - 500, // Scroll Top
			y = $(elm).offset().top,
			elementHeight = $(elm).height();

	if (eval == "object visible") return ((y < (viewportHeight + scrolltop)) && (y > (scrolltop - elementHeight)));
	if (eval == "above") return ((y < (viewportHeight + scrolltop)));
}