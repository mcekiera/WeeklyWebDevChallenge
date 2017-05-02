$(document).ready(function () {

    function autoScroll(id) {
        var height = $(id).offset().top;
        $("html, body").animate({ scrollTop: "" + height }, 1000);
    }

    function changeClassOnScrollOver(element, stClass, ndClass) {
        var position = $(window).scrollTop();

        if(position >= element.height() && element.hasClass(stClass)) {
            element.removeClass(stClass);
            element.addClass(ndClass);
        } else if(position < element.height() && element.hasClass(ndClass)) {
            element.addClass(stClass);
            element.removeClass(ndClass);
        }
    }

    $('.menu__link').click(function (e) {
        e.preventDefault();
        autoScroll($(this).attr('href'));

        $('#js-menu').children().removeClass('active');
        $(this).parent().addClass('active');
    });

    $(window).scroll(function() {
        changeClassOnScrollOver($('#js-header'), 'header--extended', 'header--fixed');
    });

    $('#js-hero-button').click(function () {
        autoScroll($(this).data('target'));

        var active = $('li.active');
        active.next('li').addClass('active');
        active.removeClass('active');
    });

});
