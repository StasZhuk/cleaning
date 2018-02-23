window.addEventListener('DOMContentLoaded', function() {
    // burger nav
    $('.nav__trigger').click(function () {
        if ($('.nav-burger').hasClass('active')) {
            $('.nav-burger').removeClass('active');
            $('.nav-burger').removeClass('no-animation');
            $('.nav__list-trigger').slideToggle('0.5', 'linear');
        } else {
            $('.nav-burger').addClass('active');
            $('.nav-burger').removeClass('no-animation');
            $('.nav__list-trigger').slideToggle('0.5', 'linear');
        }
  });

    // $(window).resize(function () {
    //     if ($(window).width() >= 992) {
    //         $('.header-nav').css('display', 'flex');
    //     } else {
    //         $('.header-nav').css('display', 'none');
    //     }
    //     return false;
    // }); 

    //slick slider Index page
});