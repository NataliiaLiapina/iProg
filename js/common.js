var countDownDate = new Date("July 31, 2021 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now an the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000);




//fixed menu

$("document").ready(function ($) {

    var nav = $('.nav-bar');

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 50) {
            nav.addClass("fixed-nav-bar");
            $('.telegram img').attr('src', $('.telegram img').attr('data-back-src'));
            $('.telegram p').css('color', '#000');
            $('.burger img').attr('src', $('.burger img').attr('data-back-src'));
            $('.lang li a').css('text-decoration', 'underline');
        }
        else {
            nav.removeClass("fixed-nav-bar");
            var img = $('.telegram img'); img.attr('src', img.attr('data-def-src'));
            var img2 = $('.burger img'); img2.attr('src', img2.attr('data-def-src'));
            $('.telegram p').css('color', '#fff');
            $('.lang li a').css('text-decoration', 'none');
        }
    });

    var hidden = $('.hidden-menu');

    $(window).scroll(function () {
        if ($(this).scrollTop() >= $('.header').outerHeight()) {
            hidden.addClass("fixed-hidden-menu");
            //$('.menu').css('display', 'block').css('margin', '0, auto');
        }
        else {
            hidden.removeClass("fixed-hidden-menu");
            //$('.menu').css('margin-left', '0');
        }
    });
});


// mobile menu
var burger = document.getElementById("burger");
burger.addEventListener("click", function (event) {
    event.preventDefault();
    $(".hidden-menu").css('left', '0').css('transition', 'left 0.4s linear');
    // $("body").css('margin-left', '300px').css('margin-right', '-300px').css('overflow', 'hidden')
    // .css('transition', 'margin-left 0.4s linear');
    $(".back").css('display', 'block');
});

var close_menu = document.getElementById("close");
close_menu.addEventListener("click", function (event) {
    event.preventDefault();
    $(".hidden-menu").css('left', '-300px').css('transition', 'left 0.4s linear');
    // $("body").css('margin-left', '0px').css('margin-right', '0px').css('overflow', 'scroll')
    // .css('transition', 'margin-left 0.4s linear');
    $(".back").css('display', 'none');
});


//плавный переход
jQuery(function($) {

    const nav = $('.menu');

    nav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top 
        }, 800);
    });

});

jQuery(function($) {

    const hidden = $('.hidden-menu');

    hidden.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top 
        }, 800);
    });

});

// $(".hidden-menu").on("click", "a", function (event) {
//     event.preventDefault();
//     var id = $(this).attr('href'),
//         top = $(id).offset().top;
//         $('body, html').animate({ scrollTop: top }, 800 );
//         // $(".hidden-menu").css('display', 'none');
// })

jQuery(function($) {

    const but = $('.button');

    but.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top 
        }, 800);
    });

});
