window.addEventListener('DOMContentLoaded', function() {
    let articles = [
        {
            'src' : '../assets/img/articles/article-1.jpg',
            'title' : '7 способов отмыть духовку от жира и нагара',
            'text' : 'Во время приготовления еды на стенках и дне духовки образуются крупные капли жира. Прилипший и подгоревший жир сложно отмыть, даже с помощью сильного моющего средства и жесткой губки. Приготовьтесь узнать, как отмывается духовка от жира и нагара в трех вариантах очистки со всеми их плюсами и минусами.',
            'href' : '#'

        }, 
        {
            'src' : '../assets/img/articles/article-1.jpg',
            'title' : '7 способов отмыть духовку от жира и нагара',
            'text' : 'Во время приготовления еды на стенках и дне духовки образуются крупные капли жира. Прилипший и подгоревший жир сложно отмыть, даже с помощью сильного моющего средства и жесткой губки. Приготовьтесь узнать, как отмывается духовка от жира и нагара в трех вариантах очистки со всеми их плюсами и минусами.',
            'href' : '#'

        }, 
        {
            'src' : '../assets/img/articles/article-1.jpg',
            'title' : '7 способов отмыть духовку от жира и нагара',
            'text' : 'Во время приготовления еды на стенках и дне духовки образуются крупные капли жира. Прилипший и подгоревший жир сложно отмыть, даже с помощью сильного моющего средства и жесткой губки. Приготовьтесь узнать, как отмывается духовка от жира и нагара в трех вариантах очистки со всеми их плюсами и минусами.',
            'href' : '#'

        }, 
        {
            'src' : '../assets/img/articles/article-1.jpg',
            'title' : '7 способов отмыть духовку от жира и нагара',
            'text' : 'Во время приготовления еды на стенках и дне духовки образуются крупные капли жира. Прилипший и подгоревший жир сложно отмыть, даже с помощью сильного моющего средства и жесткой губки. Приготовьтесь узнать, как отмывается духовка от жира и нагара в трех вариантах очистки со всеми их плюсами и минусами.',
            'href' : '#'

        }, 
        {
            'src' : '../assets/img/articles/article-1.jpg',
            'title' : '7 способов отмыть духовку от жира и нагара',
            'text' : 'Во время приготовления еды на стенках и дне духовки образуются крупные капли жира. Прилипший и подгоревший жир сложно отмыть, даже с помощью сильного моющего средства и жесткой губки. Приготовьтесь узнать, как отмывается духовка от жира и нагара в трех вариантах очистки со всеми их плюсами и минусами.',
            'href' : '#'

        }, 
        {
            'src' : '../assets/img/articles/article-1.jpg',
            'title' : '7 способов отмыть духовку от жира и нагара',
            'text' : 'Во время приготовления еды на стенках и дне духовки образуются крупные капли жира. Прилипший и подгоревший жир сложно отмыть, даже с помощью сильного моющего средства и жесткой губки. Приготовьтесь узнать, как отмывается духовка от жира и нагара в трех вариантах очистки со всеми их плюсами и минусами.',
            'href' : '#'

        }, 
        {
            'src' : '../assets/img/articles/article-1.jpg',
            'title' : '7 способов отмыть духовку от жира и нагара',
            'text' : 'Во время приготовления еды на стенках и дне духовки образуются крупные капли жира. Прилипший и подгоревший жир сложно отмыть, даже с помощью сильного моющего средства и жесткой губки. Приготовьтесь узнать, как отмывается духовка от жира и нагара в трех вариантах очистки со всеми их плюсами и минусами.',
            'href' : '#'

        }, 
        {
            'src' : '../assets/img/articles/article-1.jpg',
            'title' : '7 способов отмыть духовку от жира и нагара',
            'text' : 'Во время приготовления еды на стенках и дне духовки образуются крупные капли жира. Прилипший и подгоревший жир сложно отмыть, даже с помощью сильного моющего средства и жесткой губки. Приготовьтесь узнать, как отмывается духовка от жира и нагара в трех вариантах очистки со всеми их плюсами и минусами.',
            'href' : '#'

        }, 
    ];

    (function() {
        var onePageArticles = [];
        var articlesList = document.querySelector('.slider__list');
        var i = 0;

        articles.forEach(function(article) {
            var div = document.createElement('div');
            var divImg = document.createElement('div');
            var divTitle = document.createElement('h4');
            var divText = document.createElement('p');
            var divLink = document.createElement('a');
            var divArticleContent = document.createElement('div');
            
            div.classList.add('article');
            divImg.classList.add('article__img');
            divArticleContent.classList.add('article__content');
            divTitle.classList.add('article__title');
            divText.classList.add('article__text');
            divLink.classList.add('article__link');
            
            divImg.style.backgroundImage = `url('${article.src}')`
            divTitle.innerHTML = article.title;
            divText.innerHTML = article.text;
            divLink.innerText = 'Читать даьше ...';
            divLink.setAttribute('href', articles.href);

            divArticleContent.appendChild(divTitle);
            divArticleContent.appendChild(divText);
            divArticleContent.appendChild(divLink);

            div.appendChild(divImg);
            div.appendChild(divArticleContent);

            onePageArticles.push(div);

            if(onePageArticles.length === 3) {
                var li = document.createElement('li');
                        
                li.classList.add('slider__item');
                onePageArticles.forEach(function(item) {
                    li.appendChild(item);
                });

                articlesList.appendChild(li);
                onePageArticles = [];
            }
        });

        var li = document.createElement('li');

        li.classList.add('slider__item');
        onePageArticles.forEach(function(item) {
            li.appendChild(item);
        });

        articlesList.appendChild(li);
    })();


    $('.slider__list').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        fade: true,
        speed: 500,
        cssEase: 'linear'
    });
});