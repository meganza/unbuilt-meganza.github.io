console.log('main.js');

$(document).ready(function () {

    $('.social').on('mouseover', function () {
        $('.social').not($(this)).addClass('hover');
    });

    $('.social').on('mouseout', function () {
        $('.social').not($(this)).removeClass('hover');
    });

    $('#about').click(function () {
        $('html, body').animate({
            scrollTop: $('#about-meg').offset().top
        }, 1000);
    });

    $('#educ').click(function () {
        $('html, body').animate({
            scrollTop: $('#education').offset().top
        }, 2000);
    });

    $('#exp').click(function () {
        $('html, body').animate({
            scrollTop: $('#experiences').offset().top
        }, 2000);
    });

    $('#skill').click(function () {
        $('html, body').animate({
            scrollTop: $('#skills').offset().top
        }, 2000);
    });

    $('#sam').click(function () {
        $('html, body').animate({
            scrollTop: $('#samples').offset().top
        }, 2000);
    });

    let howlingItems = [
        {
            src: 'images/HowlingDesktop.png',
            w: 1440,
            h: 3705
        },
        {
            src: 'images/HowlingMobile.png',
            w: 360,
            h: 4643
        }
    ];

    let berkanoItems = [
        {
            src: 'images/berkano1.jpg',
            w: 1280,
            h: 1135
        },
        {
            src: 'images/berkano2.jpg',
            w: 1280,
            h: 1189
        },
        {
            src: 'images/berkano3.jpg',
            w: 1280,
            h: 1307
        },
        {
            src: 'images/berkano4.jpg',
            w: 1280,
            h: 1307
        }
    ];

    let typoItems = [
        {
            src: 'images/typo1.jpg',
            w: 800,
            h: 1280
        },
        {
            src: 'images/typo2.jpg',
            w: 800,
            h: 1280
        },
        {
            src: 'images/typo3.jpg',
            w: 800,
            h: 1280
        },
        {
            src: 'images/typo4.jpg',
            w: 800,
            h: 1280
        }
    ];

    let dlsuItems = [
        {
            src: 'images/dlsugg1.png',
            w: 1366,
            h: 1114
        },
        {
            src: 'images/dlsugg2.png',
            w: 1366,
            h: 2054
        },
        {
            src: 'images/dlsugg3.png',
            w: 1366,
            h: 2442
        },
        {
            src: 'images/dlsugg4.png',
            w: 1366,
            h: 2722
        }
    ];

    let flowItems = [
        {
            src: 'images/flowcode.png',
            w: 2382,
            h: 1902
        }
    ];

    let tgItems = [
        {
            src: 'images/tg1.png',
            w: 636,
            h: 825
        },
        {
            src: 'images/tg2.png',
            w: 636,
            h: 825
        },
        {
            src: 'images/tg3.png',
            w: 636,
            h: 825
        },
        {
            src: 'images/tg4.png',
            w: 636,
            h: 825
        },
        {
            src: 'images/tg5.png',
            w: 636,
            h: 825
        }
    ];

    let infoItems = [
        {
            src: 'images/info1.png',
            w: 1024,
            h: 1448
        },
        {
            src: 'images/info2.png',
            w: 1169,
            h: 1654
        },
        {
            src: 'images/info3.png',
            w: 1000,
            h: 3086
        },
        {
            src: 'images/info4.png',
            w: 2550,
            h: 3300
        }
    ];

    let illusItems = [
        {
            src: 'images/illu2.png',
            w: 365,
            h: 776
        },
        {
            src: 'images/illu3.jpg',
            w: 309,
            h: 516
        },
        {
            src: 'images/illu4.png',
            w: 237,
            h: 341
        },
        {
            src: 'images/illu5.png',
            w: 433,
            h: 450
        }
    ];

    function openPhotoSwipe(items) {
        var pswpElement = document.querySelectorAll('.pswp')[0];

        var options = {
            history: false,
            focus: false,
            bgOpacity: 0.9,
            showAnimationDuration: 0,
            hideAnimationDuration: 0,
        };
        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    }

    $('#showHowling').click(function(){
        openPhotoSwipe(howlingItems);
    });

    $('#showBerkano').click(function(){
        openPhotoSwipe(berkanoItems);
    });

    $('#showTypo').click(function(){
        openPhotoSwipe(typoItems);
    });

    $('#showDLSU').click(function () {
        openPhotoSwipe(dlsuItems);
    });

    $('#showFlow').click(function () {
        openPhotoSwipe(flowItems);
    });

    $('#showTG').click(function () {
        openPhotoSwipe(tgItems);
    });

    $('#showInfo').click(function () {
        openPhotoSwipe(infoItems);
    });

    $('#showIllus').click(function () {
        openPhotoSwipe(illusItems);
    });
});
