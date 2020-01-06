$('header, section').imagesLoaded({
    background: true
}).done(function (instance) {
    $('.loading').fadeOut('slow');

    var typed = new Typed("#typed", {
        strings: ['Creative'],
        typeSpeed: 140,
        showCursor: false,
    });



    //scrollReveal

    window.sr = ScrollReveal();
    sr.reveal('.scroll1', {
        duration: 1000,
    });
    sr.reveal('.scroll2', {
        duration: 3000,
        rotate: {
            x: 0,
            y: 180,
            z: 0
        },
    }, 1000);
    sr.reveal('.scroll3', {
        duration: 1000,
    }, 1000);



})