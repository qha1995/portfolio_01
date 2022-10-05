
$(function () {
    var TXT = ['HOME', 'INTRODUCE', 'SYNOPSIS', 'INFOTMAITION', 'STILL CUT', 'CBM', 'copyright']
    $('.main').fullpage({
        anchors: ['page01', 'page02', 'page03', 'page04', 'page05', 'footer'],
        //navigation: true,
        css3: false,
        afterLoad: function (page, num) {
            //애니메이션을 큐스텍에 담아서 딜레이 시킴...
            setTimeout(function () {
                $('.section').eq(num - 1).addClass('on').siblings().removeClass('on');
            });
            $('.navBar li').eq(num - 1).addClass('on').siblings().removeClass('on');
            $('.this_page').text(TXT[num - 1]);

            //부정연산자 사용
            num !== 1
                ? $('.Header').addClass('on')
                : $('.Header').removeClass('on')
        },
    });




    $('.basicSlider').slick({
        arrows: false,
        autoplay: true,
        //pauseOnHover: true,
        asNavFor: '.basicSlider',
    });


    $('.crewSlider .slide_menu li').on('click', function () {
        var idx = $(this).index();
        $('.basicSlider').slick('slickGoTo', idx)
    });

    $('.basicSlider').on('afterChange', function (e, s, c) {
        $('.crewSlider .slide_menu li').eq(c).addClass('on').siblings().removeClass('on')
    });

    $('.allOpen').on('click', function () {
        $(this).toggleClass('on');
        $('.cover').toggleClass('on');
    })

    $('.cover').on('wheel', function (event) {
        event.preventDefault()
    });

    $('.cover a').on('click', function () {
        $('.allOpen').removeClass('on')
        $('.cover').toggleClass('on');


    });



    var Rsd = $('.Picture .container');

    var slickOptions = {
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        dots: true,
        arrows: false
    };

    $(window).on('load resize', function () {
        if ($(window).width() > 768) {
            Rsd.slick('unslick');
        } else {
            Rsd.not('.slick-initialized').slick(slickOptions);
        }
    });


});

