$(document).ready(function () {
  $('.single-item').slick({
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [{
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    }, {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }]
  });

  /* show all text on seo */
  $(".offer-description__link").click(function () {
    var t = this;
    if ($(this).data("temp") || $(this).data("temp", $(this).text()),
    "" != $(this).data("link")) {
      var e = $('[data-id="' + $(this).data("link") + '"]');
      if (0 != e.length)
        if ($(this).hasClass("close"))
          $(this).css("opacity", 0),
              e.removeClass("open"),
              e.stop().animate({
                "max-height": 81
              }, 100, "linear", function () {
                $(t).stop().animate({
                  opacity: 1
                }, 100),
                    $(t).removeClass("close");
              }),
              $(this).text($(this).data("temp"));
        else {
          $(this).css("opacity", 0),
              e.addClass("open");
          var n = e.children().eq(0).outerHeight();
          e.stop().animate({
            "max-height": n
          }, 100, "linear", function () {
            $(t).stop().animate({
              opacity: 1
            }, 100),
                $(t).addClass("close");
          }),
              ($(this).text() === "Скрыть") ? $(this).text("Показать больше...") : $(this).text("Скрыть");
        }
    }
  });

  /* range slider */
  $("#catalog-price").slider({
    range: true,
    min: 0,
    max: 5000,
    values: [ 46, 1522 ],
    slide: function (event, ui) {
      $(".catalog-price--from").val(ui.values[0]);
      $(".catalog-price--to").val(ui.values[1]);
    }
  });
  $(".catalog-price--from").val($("#catalog-price").slider("values", 0));
  $(".catalog-price--to").val($("#catalog-price").slider("values", 1));

  /* show shop cart */

});