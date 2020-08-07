$(function(){
    $('.first').click(function(){
        $('.one').show();
        $('.two').hide();
    });

    $('.second').click(function(){
        $('.two').show();
        $('.one').hide();
    });

    $(window).scroll(function(){
        var scroll = $(this).scrollTop();
        if(scroll > 150)
        {
            $('.header').slideDown(600);
        }
        else
        {
            $('.header').slideUp(200);
        }
    });

    $('.one').css('display','block')

    $('.acordion h3').click(function(){

        $(this).next().slideToggle();
        $('.acordion p').not($(this).next()).slideUp();
    })

    $('.download').mouseenter(function(){
        $('.timer').countTo();
    });
    
    $('.all-img').mixItUp();

    $("html").niceScroll({
        cursorcolor: "#009fff",
        cursorwidth: "9px",
        cursorborder: "0",
        cursoropacitymin: "0",
    });


});
