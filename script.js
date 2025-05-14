$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      dots: true,
      stagePadding: 0,
      autoplay: true,
      autoplayTimeout: 3500,
      autoplayHoverPause: true, 
      responsive: {
        0: {
          items: 1
        },
        350: {
          items: 1
        },
        500: {
          items: 2
        },
        600: {
          items: 2
        },
        700: {
          items: 2
        },
        800: {
          items: 3
        },
        900: {
          items: 3
        },
        1000: {
          items: 3
        },
        1286: {
          items: 3
        }
      },
  
    });
  });