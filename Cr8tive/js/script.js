$(document).ready(function () {
    $('.nav-link .fa').on('click', function (e) {
        e.preventDefault();
        $('.searchbox').slideToggle();

    });
    $('.side').on('click', function (e) {
        e.preventDefault();
        $('.side-menu').animate({
            left: '0',
        }, 700)
    });
    $('.close').on('click', function () {
        $('.side-menu').animate({
            left: '100%',
        }, 700)
    });
    $(window).on('scroll', scrolling);

    $('.navbar-toggler ').on('click', function () {
        if ($(this).hasClass('collapsed')) {
            $(this).addClass('arrow');
            $('.menu-top').addClass('scrolled');
        } else {
            $(this).removeClass('arrow');
            scrolling();
        }
    });
});

function scrolling() {
    if ($(window).scrollTop() > $('.menu-top').height()) {
        $('.menu-top').addClass('scrolled');
    } else {
        $('.menu-top').removeClass('scrolled');
    }
}


var $teamSel = $('.team .container .row .col-lg-3');


$teamSel.hover(function () {
    $(this).addClass('active');
    if ($(this).hasClass('active') && $('.team .container .row .col-lg-3:nth-child(even)').hasClass('active')) {
        $teamSel.css('padding-top', '0');
        $(this).css('padding-top', '85px');
    } else if ($(this).hasClass('active') && $('.team .container .row .col-lg-3:nth-child(odd)').hasClass('active')) {
        $teamSel.css('padding-top', '85px');
        $(this).css('padding-top', '0');
    }

}, function () {
    $teamSel.removeClass('active').css('padding-top', '');
});

$('.navbar-nav .nav-item').on('click', function () {
    if ($('.navbar-toggler').hasClass('collapsed')) {
        scrolling();
    } else {
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-toggler').removeClass('arrow');
        scrolling();
        if ($('#navbarSupportedContent').hasClass('show')) {
            $('#navbarSupportedContent').slideUp(function () {
                $(this).removeClass('show');
                $(this).css('display', '');
            })
        };
    };
});


$(window).scroll(function () {
    if ($(window).scrollTop() >= $('.testimonials').offset().top - 100) {

        setInterval(function () {
            $('.finger').animate({
                top: '20%',
            }, 1000).fadeOut(function () {
                $(this).css('top', '');
            }).css('display', '');
        }, 3000);

    }
});

var links = ('.nav-link');

$(links).on('click', function (e) {
    e.preventDefault();

    $(links).parent().removeClass('active');
    $(this).parent().addClass('active');
    var id = $(this).attr('href');
    var target = $(id).offset().top;


    $('html, body').animate({
        scrollTop: target,
    }, 1000);
});

