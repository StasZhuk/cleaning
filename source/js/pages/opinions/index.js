window.addEventListener('DOMContentLoaded', function() {
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