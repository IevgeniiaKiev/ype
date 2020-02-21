$(document).ready(function() {
  $('.nav__item').each(function() {
    $(this).on('click', function(e) {
      var hash = this.hash;
      if (hash) {
        e.preventDefault();

        if (parseInt($(window).width()) > 1023) {
          $('html, body').animate({scrollTop: $(hash).offset().top - 30}, 750);
        } else {
          $('#sideNav').css('width', 0);
          $('html, body').animate({scrollTop: $(hash).offset().top - 90}, 750);
        }
      }
    });
  });
});
