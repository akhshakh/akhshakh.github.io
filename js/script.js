


//header bg's height settings
var headerHeight = $('header').css('height');

$('.stars, .twinkling').css('height', headerHeight);
$('#particles-js').css('height', headerHeight);
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.2,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 100,
      "color": "#ffffff",
      "opacity": 0.2,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 130,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


//vivus settings
new Vivus('svg1', {
  file: '../svg/about1.svg',
  duration: 200,
  onReady: function (myVivus) {
    $('.svgtitle').fadeIn('1000');

  }
});
new Vivus('svg2', {
  file: '../svg/about2.svg',
  duration: 200,
  onReady: function (myVivus) {


  }
});
new Vivus('svg3', {
  file: '../svg/about3.svg',
  duration: 100,
  onReady: function (myVivus) {

  }
});
new Vivus('svg4', {
  file: '../svg/angular.svg',
  duration: 70,
  onReady: function (myVivus) {
  }
});



//sliding menu


var slideWidth = "";
var menuWidth = "";

if ($(window).width() >= 992) {
  slideWidth = "-30%";
  menuWidth = "30%";
} else {
  slideWidth = "-100%"
  menuWidth = "100%"
}


$('.menu-slide-open').css('width', menuWidth);
$('.menu-slide-open').css('right', slideWidth);
$('.menu-slide-open .text').css('opacity', '0');

function openMenu() {
  $('.close-menu').addClass('slidingLeft');
  $('.menu-slide-open').animate({
    right: 0,
  }, 500, function () {
    $('.close-menu').removeClass('slidingLeft');
    $('.menu-slide-open .text').removeClass('animated fadeOutRight').addClass('animated fadeInRight');
  });
};

function closeMenu() {
  $('.close-menu').addClass('slidingRight');
  $('.menu-slide-open .text').removeClass('animated fadeInRight').addClass('animated fadeOutRight');
  $('.menu-slide-open').animate({
    right: slideWidth,
  }, 500, function () {
    $('.close-menu').removeClass('slidingRight');


  });
}


$('.menu-slide').click(function (e) {
  e.preventDefault();
  openMenu();

});
$('.close-menu').click(function (e) {
  e.preventDefault();
  closeMenu();
});


//menu scroll bg

$(window).scroll(function () {
  if ($(document).scrollTop() >= $('#about').offset().top) {
    $('.menu-slide').css({
      'background': '#000',
      'position': 'fixed',
      'right': '5%',
    });

  } else {
    $('.menu-slide').removeAttr('style');
  }
});


// menu interaction

var links = ('.menu-link');
var headerLinks = ('.menu-link-header')
$(links).on('click', function (e) {
  e.preventDefault();
  $(links).removeClass('active');
  $(this).addClass('active');
  var id = $(this).attr('href');
  var target = $(id).offset().top + 1;
  closeMenu();
  $('html, body').animate({
    scrollTop: target,
  }, 1000);
});

$(headerLinks).on('click', function (e) {
  e.preventDefault();
  var id = $(this).attr('href');
  var target = $(id).offset().top + 1;
  closeMenu();
  $('html, body').animate({
    scrollTop: target,
  }, 1000);
});


$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  $(links).each(function () {
    var id = $(this).attr('href');
    var selector = $(id).offset().top - 80;
    if (scroll >= selector) {
      $(links).removeClass('active');
      $(this).addClass('active');
    }


  })
})



var j = 0;

$(window).scroll(function () {
  if ($(document).scrollTop() >= $('#resume').offset().top && j < 1) {
    j++;
    setTimeout(function () {
      new Typed('#name1', {
        strings: ['Shakhzod'],
        typeSpeed: 20,
        showCursor: false,
        onComplete: function () {
          new Typed('#name2', {
            strings: ['Akhmedov'],
            typeSpeed: 200,
            showCursor: false,
            onComplete: function () {
              new Typed('#occ', {
                strings: ['Student'],
                typeSpeed: 100,
                showCursor: false,
                onComplete: function () {
                  new Typed('#uni1', {
                    strings: ['Proweb Tashkent'],
                    typeSpeed: 50,
                    showCursor: false,
                    onComplete: function () {
                      new Typed('#uni2', {
                        strings: ['Proweb | Front-End Development'],
                        typeSpeed: 50,
                        showCursor: false,
                        onComplete: function () {
                          new Typed('#lang', {
                            strings: ['Uzbek <br> Russian <br> English'],
                            typeSpeed: 100,
                            showCursor: false,
                            onComplete: function () {

                            }
                          });
                        }
                      });
                    }
                  });
                }
              });
            }
          });
        }
      });
    }, 1500);

  }
});




$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true,
});

$('.flipper').click(function (e) {
  e.preventDefault();
  alert('Coming Soon');
});


$(window).scroll(function () {
  if ($(document).scrollTop() >= $('#contacts').offset().top - 80 && j == 1) {
    $('.contacts-item.lg .contact-info').css('width', '90%');
  }
});


var img = document.querySelectorAll('img');

for (var i = 0; i < img.length; i++) {
  img[i].addEventListener('contextmenu', function (e) {
    e.preventDefault();
  })
  img[i].addEventListener('mousedown', function (e) {
    e.preventDefault();
  })

};

//Append li's to projects 
$('.project-actions').each(function () {
  if ($(this).hasClass('design')) {
    $(this).append('<li><i class="fa fa-pencil-square-o" aria-hidden="true"></i>Design</li>');
  };
  if($(this).hasClass('front')){
    $(this).append('<li><i class="fa fa-code" aria-hidden="true"></i>Front-end</li>');
  };
  if ($(this).hasClass('wordpress')) {
    $(this).append('<li><i class="fa fa-wordpress" aria-hidden="true"></i>CMS Wordpress</li>');
  };
  if ($(this).hasClass('cont')) {
    $(this).append('<li><i class="fa fa-pencil" aria-hidden="true"></i>Content</li>');
  };
  if ($(this).hasClass('lang')) {
    $(this).append('<li><i class="fa fa-globe" aria-hidden="true"></i>Multilanguage</li>');
  };
})



var myLazyLoad = new LazyLoad({
  elements_selector: ".lazy"
});

$('a').attr('target', '_blank');



