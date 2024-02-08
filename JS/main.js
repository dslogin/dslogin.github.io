$(document).ready(function() {
    $('.menu_dropdown').click(function(event) {
        $('.menu_dropdown,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})