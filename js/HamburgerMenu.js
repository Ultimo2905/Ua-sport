// JavaScript source code
$(function () {
    let width = 350,
        height = 500,
        speed = 300,
        button = $('#menu-button'),
        overlay = $('#overlay'),
        menu = $('#hamburger-menu');

    button.on('click', function (e) {
        if (overlay.hasClass('open')) {
            animate_menu('close');
        } else {
            animate_menu('open');
        }
    });

    overlay.on('click', function (e) {
        if (overlay.hasClass('open')) {
            animate_menu('close');
        }
    });

    $('a[href="#"]').on('click', function (e) {
        e.preventDefault();
    });

    function animate_menu(menu_toggle) {
        if (menu_toggle == 'open') {
            overlay.addClass('open');
            button.addClass('on');
            overlay.animate({ opacity: 1 }, speed);
            menu.animate({ width: width, height: height }, speed);
        }

        if (menu_toggle == 'close') {
            button.removeClass('on');
            overlay.animate({ opacity: 0 }, speed);
            overlay.removeClass('open');
            menu.animate({ width: "0", height: 0 }, speed);
        }
    }
});