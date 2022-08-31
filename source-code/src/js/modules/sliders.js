export function isSlider() {

    $(function(){

    let slider = $("#Sliders");

    slider.slick({
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        fade: false,
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToScroll: 3,
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 768,
            settings: {

              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 450,
            settings: {

              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]

      });
    });
}

