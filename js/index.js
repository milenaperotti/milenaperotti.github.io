var owl = $('.owl-carousel');
/*owl.owlCarousel({
    animateOut: 'slideOutDown',
    animateIn: 'animate__slideInRight',
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false,
    dots:false,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});*/
owl.owlCarousel({
    animateOut: 'animate__slideOutLeft',
    animateIn: 'animate__slideInRight',
    items:1,
    loop: true,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    autoplay: true,
    autoplayTimeout:4000,
    autoplayHoverPause:false,
    dots: false
});