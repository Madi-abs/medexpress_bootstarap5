$(document).ready(function () {

  // Hero-slider
  $("#hero-slider").owlCarousel({
    loop: true,
    margin: 0,
    items: 1,
    smartSpeed: 1000,
    nav: false,
    dots: true,
    responsive: {
      0: {},
      600: {},
      1000: {},
    },
  });

  // Services-slider
  $("#services-slider").owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 1000,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      767: {
        items: 2,
        center: true,
      },
      992: {
        items: 2,
        center: true,
      },
    },
  });

  // Partners-slider
  $("#partners-slider").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 1000,
    nav: false,
    dots: false,
    // autoplay: true,
    // autoplayTimeout: 2000,
    // autoplayHoverPause: false,
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 2,
      },
      767: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });
});
