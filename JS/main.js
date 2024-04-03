$(document).ready(function() {
    $('.menu_dropdown').click(function(event) {
        $('.menu_dropdown, .menu').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.menu_link').click(function(event) {
        $('.menu_dropdown, .menu').removeClass('active');
        $('body').removeClass('lock')
    });
})