jQuery(document).ready(function($){ //когда страница прогрузилас// ваш код          
    $(".js-range-slider").ionRangeSlider(
        {
            skin: "flat",
            type: "double",
            prettify_enabled : true,
            prefix : "$ ",
            min: 30,
            max: 1000,
            from: 52,
            to: 400,
            grid: false,
            hide_min_max : true
        }
    );
    });