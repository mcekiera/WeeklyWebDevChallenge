$(document).ready(function () {

    function autoScroll(id) {
        var height = $(id).offset().top;
        $("html, body").animate({ scrollTop: "" + height }, 1000);
    };

    function changeClassOnScrollOver(element, stClass, ndClass) {
        var position = $(window).scrollTop();

        if(position >= element.height() && element.hasClass(stClass)) {
            element.removeClass(stClass);
            element.addClass(ndClass);
        } else if(position < element.height() && element.hasClass(ndClass)) {
            element.addClass(stClass);
            element.removeClass(ndClass);
        }
    };

    function randomRequest(url, after) {
        $.ajax({
            url: url,
            method: 'GET'
        }).then(function(data) {
            after(data);
        });
    }

    function publishArticle(id) {
        var url ='https://jsonplaceholder.typicode.com/photos/' + id;
        var publish = function(data) {
            var article = createArticle(data);
            article.css("opacity","0");
            article.appendTo($("#js-blog-container"));
            article.animate({opacity: "1"}, 1000);
        };
        randomRequest(url, publish);
    }

    function publishRandomArticles(quantity) {
        for(var i = 0; i < quantity; i += 1) {
            var random = parseInt(Math.random() * 4999);
            publishArticle(random);
        }
    };

    function randomDate() {
        var start = new Date("2017-04-01");
        var end = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };

    function createArticle(data) {
        var date = randomDate();
        var dateStr = date.toDateString();
        var article = $("<div class=col-sm-4></div>");
        var day = Math.ceil((new Date() - date) / (1000 * 3600 * 24));
        var ending = day == 1 ? ' day' : ' days';
        var entry = $("<div class='blog-entry'></div>");
        entry.css("background-image", "url(" + data.thumbnailUrl + ")");
        entry.append("<p class='blog-entry__date'><span>" + dateStr.substr(8,2) + "</span>" + dateStr.substr(4,3) + "</p>");
        entry.append("<p class='blog-entry__title'>" + data.title + "</p>");
        entry.append("<p class='blog-entry__stamp'>By Auskteez - " + day + ending + " ago</p>");
        article.append(entry);
        return article;
    };

    function publishImages() {
        var container = $("<div class='row'></div>");
        var img = function() {
            return $("<img class='img-responsive col-xs-6 col-xxs-12' src='http://placehold.it/350x250' alt='picture'>");
        };
        container.append(img());
        container.append(img());
        container.css("opacity","0");
        container.appendTo($("#js-gallery"));
        container.animate({opacity: "1"}, 1000);
    }

    $('.menu__link').click(function (e) {
        e.preventDefault();
        autoScroll($(this).attr('href'));
    });

    $(window).scroll(function() {
        changeClassOnScrollOver($('#js-header'), 'header--extended', 'header--fixed');
    });

    $('#js-hero-button').click(function () {
        autoScroll($(this).data('target'));
    });

    $("#js-blog-button").click(function () {
        console.log("blog-button");
        publishRandomArticles(3);
    });

    $("#js-gallery-button").click(function () {
        publishImages();
    });

});
