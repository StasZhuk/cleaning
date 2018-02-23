window.addEventListener('DOMContentLoaded', function() {
    let photos = [
        {'src' : '../assets/img/examples-work/work-1.jpg'}, 
        {'src' : '../assets/img/examples-work/work-2.jpg'},
        {'src' : '../assets/img/examples-work/work-3.jpg'}, 
        {'src' : '../assets/img/examples-work/work-1.jpg'}, 
        {'src' : '../assets/img/examples-work/work-2.jpg'}, 
        {'src' : '../assets/img/examples-work/work-3.jpg'}, 
        {'src' : '../assets/img/examples-work/work-1.jpg'}, 
        {'src' : '../assets/img/examples-work/work-2.jpg'}, 
        {'src' : '../assets/img/examples-work/work-3.jpg'}, 
        {'src' : '../assets/img/examples-work/work-1.jpg'}, 
        {'src' : '../assets/img/examples-work/work-2.jpg'}, 
        {'src' : '../assets/img/examples-work/work-3.jpg'}, 
        {'src' : '../assets/img/examples-work/work-1.jpg'}, 
        {'src' : '../assets/img/examples-work/work-2.jpg'}, 
        {'src' : '../assets/img/examples-work/work-3.jpg'}, 
        {'src' : '../assets/img/examples-work/work-1.jpg'}, 
    ];

    (function() {
        var onePagePhoto = [];
        var photoList = document.querySelector('.photo__list');
        var i = 0;

        photos.forEach(function(photo) {
            var div = document.createElement('div');
            
            div.classList.add('photo__img');
            div.style.backgroundImage = `url('${photo.src}')`
            onePagePhoto.push(div);

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

        li.classList.add('photo__item');
        onePagePhoto.forEach(function(item) {
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
});