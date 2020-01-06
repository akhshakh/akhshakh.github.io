function scrolling() {
    if ($(window).scrollTop() > $('.menu-top').height()) {
        $('.menu-top').addClass('scrolled');
    } else {
        $('.menu-top').removeClass('scrolled');
    }
}

$(window).on('scroll', scrolling);

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


$('.navbar-nav .nav-item').on('click', function () {
    if ($('.navbar-toggler').hasClass('collapsed')) {
        scrolling();
    } else {
        $('.navbar-toggler').addClass('collapsed');
        scrolling();
        if ($('#navbarSupportedContent').hasClass('show')) {
            $('#navbarSupportedContent').slideUp(function () {
                $(this).removeClass('show');
                $(this).css('display', '');
            })
        };
    };
});

$('.navbar-toggler ').on('click', function () {
    if ($(this).hasClass('collapsed')) {
        $('.menu-top').addClass('scrolled');
    } else {
        scrolling();
    }
});

$('section').imagesLoaded({
    background: true
}).done(function (instance) {
    $('.loader').slideUp();
    window.sr = ScrollReveal();
    sr.reveal('.header1', {
        duration: 2000,
        distance: '300px',
        scale: 1,
        easing: 'ease-in-out',
    });
    sr.reveal('.design1', {
        duration: 2000,
        origin: 'right',
        distance: '1000px',
        scale: 1,
        easing: 'ease-in-out',
    });
    sr.reveal('.design2', {
        duration: 2000,
        origin: 'left',
        distance: '1000px',
        scale: 1,
        easing: 'ease-in-out',
    });
    sr.reveal('.wedo1', {
        duration: 2000,
        distance: '300px',
        scale: 1,
        easing: 'ease-in-out',
    });
    sr.reveal('.wedo2', {
        duration: 2000,
        origin: 'left',
        distance: '300px',
        scale: 0.9,
        easing: 'ease-out',
    }, 0);
    sr.reveal('.wedo3', {
        duration: 2000,
        origin: 'right',
        distance: '300px',
        scale: 0.9,
        easing: 'ease-out',
    }, 0);
    sr.reveal('.wedo4', {
        duration: 1000,
        delay: 2000,
        distance: '300px',
        scale: 0.9,
        easing: 'ease-out',
    }, );
    sr.reveal('.team1', {
        duration: 2000,
        distance: '300px',
        scale: 1,
        easing: 'ease-in-out',
    });
    sr.reveal('.team3', {
        duration: 1000,
        delay: 2000,
        distance: '300px',
        scale: 0.9,
        easing: 'ease-out',
    }, );
    sr.reveal('.team2', {
        duration: 2000,
        origin: 'left',
        distance: '1000px',
        scale: 1,
        easing: 'ease-in-out',
    }, 1000);
    sr.reveal('.mp1', {
        duration: 2000,
        origin: 'right',
        distance: '1000px',
        scale: 1,
        easing: 'ease-in-out',
    },);
    

})