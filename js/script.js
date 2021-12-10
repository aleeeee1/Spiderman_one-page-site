AOS.init();

$("#to-film").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".titolo-film").offset().top - 120,
    },
    1700
  );
});
$("#to-poteri").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".titolo-poteri").offset().top - 120,
    },
    1700
  );
});
$(".back-to-top").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".titolo-indice").offset().top - 10,
    },
    1700
  );
});

$(".start-button, .freccia")
  .click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".titolo-indice").offset().top - 120,
      },
      2000
    );
  })
  .hover(
    function () {
      $(".start-button").css("background-color", "rgb(211, 0, 0)");
      $(".freccia").css("background-color", "rgb(167, 0, 0)");
    },
    function () {
      $(".start-button").css("background-color", "red");
      $(".freccia").css("background-color", "rgb(211, 0, 0)");
    }
  );

$("#to-biografia").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".titolo-biografia").offset().top - 120,
    },
    2000
  );
});
$("#to-come-e-stato-ideato").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".titolo-come-e-stato-ideato").offset().top - 120,
    },
    2000
  );
});
$("#to-storia-del-personaggio").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".titolo-storia-del-personaggio").offset().top - 120,
    },
    2000
  );
});
$("#to-gadget").click(function () {
  $("html, body").animate(
    {
      scrollTop: $(".titolo-gadget").offset().top - 120,
    },
    2000
  );
});

$(window).scroll(function () {
  if (
    $(window).scrollTop() - $(window).innerHeight() >
    $(".titolo-biografia").height()
  ) {
    $(".back-to-top").removeClass("nascosto");
  } else {
    $(".back-to-top").addClass("nascosto");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    $(".attivo").removeClass("attivo");

    var curr_height = $(document).scrollTop();
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth", //scroll asse x
    });
    $("html, body").animate(
      {
        scrollTop: curr_height, //scroll asse y
      },
      0
    );
    $(this).addClass("attivo");
  });
});
