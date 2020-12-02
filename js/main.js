(function ($) {
	'use strict';
	$('img, a').on('dragstart', function (event) {
		event.preventDefault();
	});

	//Плавный сролл до блока
    $('.navbar-nav a[href*="#"], a.scroll-to-block').not('[href="#"]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });

    if($(window).scrollTop() > 70) $('header').addClass('fixed');
    else $('header').removeClass('fixed');

    $(window).scroll(function(){
        if($(window).scrollTop() > 70) $('header').addClass('fixed');
        else $('header').removeClass('fixed');
    });


    window.addEventListener("load", function() {
        var form = document.getElementById("needs-validation");
        form.addEventListener("submit", function(event) {
            if (form.checkValidity() == false) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    }, false);
})(jQuery);