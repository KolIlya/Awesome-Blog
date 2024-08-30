$(document).ready(function() {
    function getSliderConfig() {
        let sliderConfig = {
            slideWidth: 450,
            minSlides: 1,
            maxSlides: 3,
            pager: false,
            controls: true,
            infiniteLoop: true,
            moveSlides: 1,
        };

        if ($(window).width() < 431) {
            sliderConfig = {
                ...sliderConfig,
                minSlides: 1,
                maxSlides: 1,
                slideWidth: 400,
            };
        } else if ($(window).width() < 770) {
            sliderConfig = {
                ...sliderConfig,
                minSlides: 2,
                maxSlides: 2,
                slideWidth: 335,
            };
        }

        return sliderConfig;
    }

    function initializeSlider(selector) {
        const sliderConfig = getSliderConfig();
        
        if ($.fn.bxSlider) {
            const existingSlider = $(selector).data('bxSlider');
            if (existingSlider) {
                existingSlider.destroySlider();
            }
        }

        $(selector).bxSlider(sliderConfig);
    }

    const sliderSelector = '.slider';
    initializeSlider(sliderSelector);

    $(window).resize(function() {
        initializeSlider(sliderSelector);
    });
});