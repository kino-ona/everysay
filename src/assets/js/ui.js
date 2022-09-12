//******
// scroll animate
//******
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


//******
// form, input
//******
function pwdShow(set) {
  var passwordField = $(set).parent('.form_chk').parent('dd').find('input');
  var passwordFieldType = passwordField.attr('type');

  if(passwordFieldType == 'password')
  {
    passwordField.attr('type', 'text');

    $(set).addClass('show');
  } else {
    passwordField.attr('type', 'password');

    $(set).removeClass('show');
  }
}

function txtReset(set) {
  var txtField = $(set).parent('.form_chk').parent('dd').find('input');
  txtField.val('');
  $(set).css('display', 'none');
}

$(document).ready(function() {
	$('.form_box').each(function(){
    $(this).find('input').on("focus", function(){
      if($(this).next().find('.bt_reset').length > 0) {
        $(this).next().find('.bt_reset').css('display', 'inline-block');
      }
    });
  });
});

$('.form_box').find('input').each(function(){
  $(this).on("blur", function(){
    if($(this).find('.bt_reset').length > 0) {
      $(this).find('.bt_reset').css('display', 'inline-block')
    }
  });
});

//******
// layer popup control
//******
var isOpen = false;
function layerOpen(layerId){
	var curPos = $(window).scrollTop();
	$('html').addClass('noscroll');
	$('#' + layerId).addClass('is-visible');
	var layerID = $('#' + layerId);
	layerID.attr({
		'aria-hidden': 'false',
		'open': 'true',
		'tabindex': '0'
	});
	if($('[role="dialog"]:visible').length <= 1 && isOpen == false) {
		$('.wrap').css('top',-curPos);
		isOpen = true
	}
	var delay = setTimeout(function(){
		if(!$('html').hasClass('noscroll')){
			$('html').addClass('noscroll');
		}
		clearTimeout(delay);
	}, 50);
}
function layerClose(layerId){
	var curPos = -(parseInt($('.wrap').css('top')));
	$('#' + layerId).removeClass('is-visible');
	$('#' + layerId).attr('aria-hidden', 'true');
	// $('#' + layerId).removeAttr('open tabindex');
	$('html').removeClass('noscroll');
	if ($('[role="dialog"].is-visible').length < 1) {
		$('html').removeClass('noscroll').find('.wrap').css({'top':0});
		$(window).scrollTop(curPos);
		isOpen = false;
	}
}