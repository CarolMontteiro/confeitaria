function initSlick() {

    if ($(window).width() <= 768) {

        if (!$('.response-kits').hasClass('slick-initialized')) {

            $('.response-kits').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 2,
                slidesToScroll: 2,
                responsive: [
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        }

    } else {

        if ($('.response-kits').hasClass('slick-initialized')) {
            $('.response-kits').slick('unslick');
        }

    }
}

initSlick();

$(window).on('resize', function () {
    initSlick();
});