(function ($) {

  $(window).on('load', function () {
    $("#loader-wrapper").fadeOut();
    $("#loaded").delay(1000).fadeOut("slow");
  });

   /*------------------------------------------------
                DECLARATIONS
      ------------------------------------------------*/
      var scroll = $(window).scrollTop();
      var scrollup = $('.boost-scrool-top');
      /*------------------------------------------------
                  BACK TO TOP
      ------------------------------------------------*/
      scrollup.click(function () {
        $('html, body').animate({
          scrollTop: '0px'
        }, 800);
        return false;
      });
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 200) {
          scrollup.fadeIn();
        } else {
          scrollup.fadeOut();
        }
      });


})(jQuery);