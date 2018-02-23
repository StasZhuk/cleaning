window.addEventListener('DOMContentLoaded', function() {
    //Accordion
    (function() {
        $('.accordion .accordion__title').on('click', function() {
            $('.accordion .accordion__content').not($(this).next()).slideUp(500);
            $('.accordion .accordion__title').not($(this)).removeClass('active');
            $(this).next().slideToggle(500);
            $(this).toggleClass('active');
        });
    })();
});