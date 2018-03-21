window.addEventListener('DOMContentLoaded', function() {
    // burger nav
    $('.nav__trigger').click(function () {
        if ($('.nav-burger').hasClass('active')) {
            $('.nav-burger').removeClass('active');
            $('.nav-burger').removeClass('no-animation');
            $('.nav__list-trigger').slideToggle('0.5', 'linear');
            $('#nav-overlay').toggleClass('active');
        } else {
            $('.nav-burger').addClass('active');
            $('.nav-burger').removeClass('no-animation');
            $('.nav__list-trigger').slideToggle('0.5', 'linear');
            $('#nav-overlay').toggleClass('active');
        }
  });
});