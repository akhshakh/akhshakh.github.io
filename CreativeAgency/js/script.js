$(document).ready(function () {
    

    var links = $('.nav-link');
    $(links).on('click', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var target = $(id).offset().top;

        $('html, body').animate({
            scrollTop: target,
        }, 1000 )
    });


    var modal = $('.position');
    var modalText = $('.position .textbox');
    var img = $('.featImg');
    var close= $('.x');

    img.on('click', function () {
        modalText.show();
        modal.animate({
            top: '0',
        }, 700);
    });
    close.on('click', function () {
         modal.animate({
             top: '90%',
         }, 700, function () {
             modalText.hide();
         });

        
       
    });

    var profile = document.querySelectorAll('.profilebox');
    var member = document.querySelectorAll('.member');


    profile[0].onclick = function () {
        for (var i = 0; i < member.length; i++) {
            member[i].classList.remove('scrollActive');
        }
        member[0].classList.add('scrollActive');




    }
    profile[1].onclick = function () {

        for (var i = 0; i < member.length; i++) {
            member[i].classList.remove('scrollActive');
        }
        member[1].classList.add('scrollActive');


    }
    profile[2].onclick = function () {
        for (var i = 0; i < member.length; i++) {
            member[i].classList.remove('scrollActive');
        }
        member[2].classList.add('scrollActive');
    }
    profile[3].onclick = function () {
        for (var i = 0; i < member.length; i++) {
            member[i].classList.remove('scrollActive');
        }
        member[3].classList.add('scrollActive');
    }
    profile[4].onclick = function () {
        for (var i = 0; i < member.length; i++) {
            member[i].classList.remove('scrollActive');
        }
        member[4].classList.add('scrollActive');
    }





///////////////////////////////////////////////////////////////////////////
    var bar = $('.progressbar');
    var member = $('.member');
    var index = $('.progressindex');
    var width = 0;





    $(window).scroll(function () {
        
        if ($(window).scrollTop() >= $(member).offset().top) {
            if ($(member[0]).hasClass('scrollActive')) {
                setInterval(go1, 200);
                function go1() {
                    if (width < 97) {
                        width++;
                        bar[0].style.width = width + '%';
                        index[0].innerHTML = width + '%';
                    }
                }
                setInterval(go2, 200);

                function go2() {
                    if (width < 90) {
                        width++;
                        bar[1].style.width = width + '%';
                        index[1].innerHTML = width + '%';
                    }
                }
                setInterval(go3, 200);

                function go3() {
                    if (width < 97) {
                        width++;
                        bar[2].style.width = width + '%';
                        index[2].innerHTML = width + '%';
                    }
                }
            }

            
            else if ($(member[1]).hasClass('scrollActive')) {
                /* width = 0; */
                setInterval(go4, 200); 

                function go4() {
                    
                    if (width < 87) {
                        width++;
                        bar[3].style.width = width + '%';
                        index[3].innerHTML = width + '%';
                    }
                }

                setInterval(go5, 200);  

                function go5() {
                    
                    if (width < 89) {
                        width++;
                        bar[4].style.width = width + '%';
                        index[4].innerHTML = width + '%';
                    }
                }
                setInterval(go6, 200);  

                function go6() {
                    
                    if (width < 92) {
                        width++;
                        bar[5].style.width = width + '%';
                        index[5].innerHTML = width + '%';
                    }
                }
            }


        }

    });

//////////////////////////////////////////////////


    /* if (member[0].classList.contains('scrollActive')) {
       setInterval(Go(96, 0), 100);
    }


    function Go(max, n) {
        var width = 0;
        
        if (width <= max) {
            width++;
            bar[n].style.width = width + '%';
            index[n].innerHTML = width + '%';


        }
        else {
         
        }

        console.log(width);


    }; */








    //Progressbar Animation
    /*  function Go(settings) {
            this.max = settings.max;
            this.number = settings.number;
            var context = this;
            width = 0;

            if (width <= context.max) {
                width++;
                bar[context.number].style.width = width + '%';
                index[context.number].innerHTML = width + '%';
               
            }
        
            
        }
        
       

        

    var bar1 = new Go({
       max: 96,
       number: 0,
   })
   setInterval(bar1, 30); */






});