$('.owl-carousel').owlCarousel({
    loop:false,/*Se for true, as imagens vão se repetir*/
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})