$(window).scroll(function () {
  if ($(this).scrollTop() > 0) {
    $(".topBar").addClass("active");
  } else {
    $(".topBar").removeClass("active");
  }
  if ($(this).scrollTop() > 500) {
    $(".backHome").addClass("active");
  } else {
    $(".backHome").removeClass("active");
  }
});

$('.works__slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  fade:true,
  // responsive: [
  //   {
  //     breakpoint: 1024,
  //     settings: {
  //       slidesToShow: 3,
  //       slidesToScroll: 3,
  //       infinite: true,
  //       dots: true
  //     }
  //   },
  //   {
  //     breakpoint: 600,
  //     settings: {
  //       slidesToShow: 2,
  //       slidesToScroll: 2
  //     }
  //   },
  //   {
  //     breakpoint: 480,
  //     settings: {
  //       slidesToShow: 1,
  //       slidesToScroll: 1
  //     }
  //   }
  // ]
});

// ハンバーガーメニュー
$('.topHam,.topClose').on('click', function(){
  $('.topBar__topMenu').toggleClass('active');
});
