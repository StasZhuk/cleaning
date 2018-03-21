window.addEventListener('DOMContentLoaded', function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1120,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
              }
            },
            {
              breakpoint: 930,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 740,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 545,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    });

    //Opinions
    (function() {
        $('.list__trigger').slideUp();
        $('.btn__trigger').on('click', function(e) {
            e.preventDefault();
            var $this = $(this);
            var $thisHiddenList = $this.closest('.list__wrap').find('.list--hidden');
            var $thisTriggerList = $this.closest('.list__wrap').find('.list__trigger');

            if ($thisHiddenList.hasClass('active')) {
                var btnTitle = $this.attr('data-btn-text');
                $thisTriggerList.slideUp(500);
                $thisHiddenList.removeClass('active');
                $this.text(btnTitle);
            } else {
                $thisTriggerList.slideDown(500);
                $thisHiddenList.addClass('active');
                $this.text('Свернуть');
            }
        });
    })();
});