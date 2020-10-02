$(window).scroll(function(){
    var windowScroll = Math.round($(this).scrollTop());
    


    $('h1').css({
        'transform' : 'translate(0px, '+ windowScroll +'%)'
    });

    $('.kotak').css({
        'transform' : 'translate(0px, '+ windowScroll/10 +'%)'
    });
    $('p').css({
        'transform' : 'translate(0px,'+ windowScroll/5+'%)'
    })
});