// Inicialização do Slick Slider
function initializeSlick(contentId) {
    $("#" + contentId).slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 494,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
}

const tabs = document.querySelectorAll('.tab-btn');

tabs.forEach(tab => tab.addEventListener('click', () => tabClicked(tab)));

function tabClicked(tab) {
    const contents = document.querySelectorAll('.contentCategory');

    tabs.forEach(tab => {
        if ($(tab).hasClass('slick-initialized')) {
            $(tab).slick('unslick');
        }
        tab.classList.remove('active');
    });

    tab.classList.add('active');

    contents.forEach(contentCategory => {
        if ($(contentCategory).hasClass('slick-initialized')) {
            $(contentCategory).slick('unslick');
        }
        contentCategory.classList.remove('show');
    });

    const contentId = tab.getAttribute('content-id');

    const contentCategory = document.getElementById(contentId);
    contentCategory.classList.add('show');

    initializeSlick(contentId);
}

document.addEventListener('DOMContentLoaded', function() {
    const initialContent = document.querySelector('.contentCategory.show');
    if (initialContent) {
        initializeSlick(initialContent.id);
    }
});