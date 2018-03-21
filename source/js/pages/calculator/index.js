window.addEventListener('DOMContentLoaded', function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

    // select styler
    $(function() {
        $('select, select').styler({
            selectSmartPositioning: false
        });
    });

    // form slider 
    $(function() {
        $('.form-slider-metres').slider({
            max: 300,
            min: 30,
            step: 5,
            // slide: sliderMove,
            create: function() {               
                $('#slider-metres').val($('.form-slider-metres').slider("value"));
            },
            slide: function(e) {
                $('#slider-metres').val($('.form-slider-metres').slider("value"));
            },
            stop: function(e) {
                $('#slider-metres').val($('.form-slider-metres').slider("value"));
            }
        });

        $('.form-slider-rooms').slider({
            max: 10,
            min: 1,
            step: 1,
            create: function() {               
                $('#slider-rooms').val($('.form-slider-rooms').slider("value"));
            },
            slide: function(e) {
                $('#slider-rooms').val($('.form-slider-rooms').slider("value"));
            },
            stop: function(e) {
                $('#slider-rooms').val($('.form-slider-rooms').slider("value"));
            }
        });

        $('input').on('keyup', function(e) {
            if(e.target.id === 'slider-metres' && e.target.value !== '') {
                if($(this).val() > 300) {
                    $(this).val(300);
                }
                if($(this).val() < 0) {
                    $(this).val(30);
                }
            }

            if(e.target.id === 'slider-rooms' && e.target.value !== '') {
                if($(this).val() > 10) {
                    $(this).val(10);
                }
                if($(this).val() < 1) {
                    $(this).val(1);
                }
            }

            if (e.target.id === "slider-rooms") {
                $('.form-slider-rooms').slider("value", $(this).val())
            }
            if (e.target.id === "slider-metres") {
                $('.form-slider-metres').slider("value", $(this).val())
            }
        });
    });
});