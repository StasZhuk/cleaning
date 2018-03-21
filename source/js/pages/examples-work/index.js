window.addEventListener('DOMContentLoaded', function() {
    let photos = [
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-1.jpg',
                "small" : '../assets/img/examples-work/work-1.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-2.jpg',
                "small" : '../assets/img/examples-work/work-2.jpg'
            }
        },
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-3.jpg',
                "small" : '../assets/img/examples-work/work-3.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-1.jpg',
                "small" : '../assets/img/examples-work/work-1.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-2.jpg',
                "small" : '../assets/img/examples-work/work-2.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-3.jpg',
                "small" : '../assets/img/examples-work/work-3.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-1.jpg',
                "small" : '../assets/img/examples-work/work-1.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-2.jpg',
                "small" : '../assets/img/examples-work/work-2.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-3.jpg',
                "small" : '../assets/img/examples-work/work-3.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-1.jpg',
                "small" : '../assets/img/examples-work/work-1.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-2.jpg',
                "small" : '../assets/img/examples-work/work-2.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-3.jpg',
                "small" : '../assets/img/examples-work/work-3.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-1.jpg',
                "small" : '../assets/img/examples-work/work-1.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-2.jpg',
                "small" : '../assets/img/examples-work/work-2.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-3.jpg',
                "small" : '../assets/img/examples-work/work-3.jpg'
            }
        }, 
        {
            'src' : {
                "big" : '../assets/img/examples-work/work-1.jpg',
                "small" : '../assets/img/examples-work/work-1.jpg'
            }
        }, 
    ];

    (function() {
        var onePagePhoto = [];
        var photoList = document.querySelector('.photo__list');
        var i = 0;

        photos.forEach(function(photo) {
            var div = document.createElement('div');
            var a = document.createElement('a');

            a.href = photo.src.big;
            
            div.classList.add('photo__img');
            div.style.backgroundImage = `url('${photo.src.small}')`;
            a.appendChild(div);

            onePagePhoto.push(a);

            if(onePagePhoto.length === 9) {
                var li = document.createElement('li');
                        
                li.classList.add('photo__item');
                onePagePhoto.forEach(function(item) {
                    li.appendChild(item);
                });

                photoList.appendChild(li);
                onePagePhoto = [];
            }
        });

        var li = document.createElement('li');

        onePagePhoto.forEach(function(item) {
            li.classList.add('photo__item');
            li.appendChild(item);
        });

        photoList.appendChild(li);
    })();

    $('.photo__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
    });

    $('.photo__list').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image'
        // other options
    });
});