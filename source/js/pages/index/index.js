window.addEventListener('DOMContentLoaded', function() {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
    });

    //Accordion
    (function() {
        $('.accordion .accordion__title').on('click', function() {
            $('.accordion .accordion__content').not($(this).next()).slideUp(500);
            $('.accordion .accordion__title').not($(this)).removeClass('active');
            $(this).next().slideToggle(500);
            $(this).toggleClass('active');
        });
    })();

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