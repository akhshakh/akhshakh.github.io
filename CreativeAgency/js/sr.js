
$('section').imagesLoaded({
    background: true
}).done(function (instance) {
    $('.loading').fadeOut('slow');
    window.sr = ScrollReveal();
    sr.reveal('.scroll', {
        duration: 1000,
    
    });
    
    sr.reveal('.scroll1', {
        duration: 2000,
        reset: true,
    });
    sr.reveal('.scroll2', {
        duration: 2000,
        reset: true,
    });
    sr.reveal('.scroll3', {
        
    });
    sr.reveal('.scroll4', {
        duration: 1000,
            delay: 1000,
    });
    sr.reveal('.scroll7', {
    
    
    });
    sr.reveal('.profilebox', 200);
    sr.reveal('.touch .social', 200);
    sr.reveal('.price .img', {
        duration: 1000,
        reset: true,
    });
    sr.reveal('.featurebox ul li', 500); 
    sr.reveal('.footer', 1000); 

})