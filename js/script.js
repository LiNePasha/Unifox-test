$(document).ready(function () {
  $(window).scroll(function () {
    // console.log();
    var wiOf = $(this).scrollTop();
    if (wiOf > 20) {
      $(".head").addClass("fixedNav");
    } else {
      $(".head").removeClass("fixedNav");
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $(".btn-move").show();
    } else {
      $(".btn-move").hide();
    }
  });

  $(".btn-move").click(function () {
    $("html").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });

  // slider card
});

// var mixer = mixitup(".container", {
//   selectors: {
//     target: ".blog-item",
//   },
//   animation: {
//     duration: 300,
//   },
// });
