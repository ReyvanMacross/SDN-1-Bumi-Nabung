$(document).ready(function(){

    const owl = $("#slider-hero");

    owl.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      nav: false, 
      dots: true,
    });
  
    $(".slider-prev").click(function () {
      owl.trigger("prev.owl.carousel");
    });
  
    $(".slider-next").click(function () {
      owl.trigger("next.owl.carousel");
    });

    $('#tenaga-pendidik-slider').owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 3,
        dots: false,
        margin: 20,
        navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '#slider-tools-1',
});

    $('#alumni-slider').owlCarousel({
        loop: true,
        nav: true,
        // mouseDrag: false,
        items: 2,
        dots: false,
        margin: 20,
        navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        navContainer: '#slider-tools-2',
});

$('#galeri-slider').owlCarousel({
    loop: true,
    nav: true,
    // mouseDrag: false,
    items: 3,
    dots: false,
    margin: 20,
    navText: [
    '<i class="fa fa-angle-left" aria-hidden="true"></i>',
    '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '#slider-tools-3',
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});