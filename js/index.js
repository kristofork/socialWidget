function customAnimate() {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    var media = ["twitter", "youtube", "facebook", "instagram"];
    var exit = ["hinge", "bounceOutUp"];

    $.each(media, function (i, val) {
        setTimeout(function () {
            $('.' + val).addClass('animated bounceInDown').css('display', 'block').one(animationEnd, function () {
                $('.' + val + ' img').addClass('animated rubberBand');
                $('.' + val + ' h2').addClass('animated slideInRight').css('display', 'block');
                setTimeout(function () {
                    $('.' + val).removeClass('animated ' + 'bounceInDown');
                    $('.' + val).addClass('animated bounceOutUp').one(animationEnd, function () {
                        $('.' + val).removeClass('animated ' + 'bounceOutUp').css('display', 'none');
                    });
                }, 10000)
            });
        }, i * 40000)
    });


}