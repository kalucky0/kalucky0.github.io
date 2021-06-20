jQuery(document).ready(function ($) {
    // Image lazy loading
    $('.lazy').Lazy();

    // Smooth Scrolling
    $('.smoothscroll').on('click', function (e) {
        e.preventDefault();

        let target = this.hash,
            $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 10
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
    });

    // Highlight the current section in the navigation bar
    const sections = $("section, header");
    const navigation_links = $("#nav-wrap a");

    $(window).scroll(function () {
        for(const elem of sections) {
            const pos = $(elem).offset().top - $(window).scrollTop();
            if(pos > -10 && pos < 250) {
                const active_link = $('#nav-wrap a[href="#' + elem.id + '"]');
                navigation_links.parent().removeClass("current");
                active_link.parent().addClass("current");
            }
        }
    });

    //	Make sure that #header-background-image height is
    // equal to the browser height.
    $('header').css({'height': $(window).height()});
    $(window).on('resize', function () {
        $('header').css({'height': $(window).height()});
        $('body').css({'width': $(window).width()})
    });

    //	Fade In/Out Primary Navigation
    $(window).on('scroll', function () {
        const h = $('header').height();
        const y = $(window).scrollTop();
        const nav = $('#nav-wrap');
        if ((y > h * .20) && (y < h) && ($(window).outerWidth() > 768)) {
            nav.fadeOut('fast');
        } else {
            if (y < h * .20) {
                nav.removeClass('opaque').fadeIn('fast');
            } else {
                nav.addClass('opaque').fadeIn('fast');
            }
        }
    });

    //	Modal Popup
    $('.item-wrap a').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        removalDelay: 200,
        showCloseBtn: false,
        mainClass: 'mfp-fade'
    });

    $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
    });

    //	Flexslider
    $('.flexslider').flexslider({
        namespace: "flex-",
        controlsContainer: ".flex-container",
        animation: 'slide',
        controlNav: true,
        directionNav: false,
        smoothHeight: true,
        slideshowSpeed: 7000,
        animationSpeed: 600,
        randomize: false,
    });
});