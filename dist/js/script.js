$(document).ready(function() {
    $('.courses__carousel_inner').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true
    });
    $('.master__carousel_inner').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true
    });
});