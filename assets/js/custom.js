(function ($) {
$(document).ready(function() {
  var header = $('.header');
  var headerHeight = header.outerHeight();
  var lastScrollTop = 0;

  $(window).scroll(function() {
    var scrollTop = $(this).scrollTop();

    if (scrollTop > lastScrollTop) {
      header.addClass('hidden');
    } else {
      header.removeClass('hidden');
    }

    lastScrollTop = scrollTop;

    if (scrollTop > headerHeight) {
      header.addClass('fixed');
    } else {
      header.removeClass('fixed');
    }
    if (scrollTop > headerHeight) {
      header.addClass('animated');
    } else {
      header.removeClass('animated');
    }
    if (scrollTop > headerHeight) {
      header.addClass('fadeInDown');
    } else {
      header.removeClass('fadeInDown');
    }
  });
})
})(jQuery);
