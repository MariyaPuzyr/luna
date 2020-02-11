$(document).ready(function () {
  if ($('.single-item').length > 0) {
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
  }

  if ($('.page-product-assemble-set__slider').length > 0) {
    $('.page-product-assemble-set__slider').slick({
      dots: false,
      arrow: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
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
  }

  /* show all text on seo */
  if ($('.offer-description__link').length > 0) {
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
  }

  /* range slider */
  if ($('#catalog-price').length > 0) {
    $("#catalog-price").slider({
      range: true,
      min: 0,
      max: 5000,
      values: [46, 1522],
      slide: function (event, ui) {
        $(".catalog-price--from").val(ui.values[0]);
        $(".catalog-price--to").val(ui.values[1]);
      }
    });
    $(".catalog-price--from").val($("#catalog-price").slider("values", 0));
    $(".catalog-price--to").val($("#catalog-price").slider("values", 1));
  }

  /* show shop cart */
  if ($('.header-cart').length > 0) {
    $('.header-cart').click(function () {
      $('.cart').addClass('open');
      $('body').css('overflow', 'hidden');
    });
    /* hide shop cart */
    $('.cart-overlay, .cart-top__continue-shop').click(function () {
      $('.cart').removeClass('open');
      $('body').css('overflow', 'auto');
    });
  }
  /* shop cart counter */
  if ($('.minus').length > 0) {
    $('.minus').click(function () {
      var $input = $(this).parent().find('input');
      var count = parseInt($input.val()) - 1;
      count = count < 1 ? 1 : count;
      $input.val(count);
      $input.change();
      return false;
    });
    $('.plus').click(function () {
      var $input = $(this).parent().find('input');
      $input.val(parseInt($input.val()) + 1);
      $input.change();
      return false;
    });
  }
  /* shop cart counter end */

  /*show dropdown list*/
  $('.dropdown-list').click(function () {
    $(this).toggleClass('open');
  });
  /*show dropdown list end */

  /* dropdown catalog filter*/
  if ($('.catalog-filter--title').length > 0) {
    $('.catalog-filter--title').click(function () {
      $('.catalog-filter--title').removeClass('open');
      $(this).toggleClass('open');
      $(this).next('.catalog-filter__list').slideToggle();
    });

    $('.catalog-filter--title.open').click(function () {
      $(this).next('.catalog-filter__list').slideUp();
    });
  }
  /* dropdown catalog filterend */

  /* page product slider */
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav'
  });
  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: false,
    vertical: true,
    focusOnSelect: true
  });
  /* page product slider end*/


  /* single slider */
  $('.product-kit__slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
  /* single slider end*/

  /* dropdown language list */
  $('.dropdown-toggle').click(function () {
    $('.dropdown-lang-list').toggleClass('open');
  });
  /* dropdown language list end*/

  $(document).click(function (o) {
    $(o.target).closest(".dropdown-list").length || $(".dropdown-list").removeClass("open"), o.stopPropagation()
  });

  /* show buy in one click modal */
  if ($('.buy-click').length > 0) {
    $('.buy-click').click(function () {
      $('.cart-modal').addClass('open');
      $('body').css('overflow', 'hidden');
    });
    /* hide shop cart */
    $('.cart-overlay, .cart-modal__item .close').click(function () {
      $('.cart-modal').removeClass('open');
      $('body').css('overflow', 'auto');
    });
  }
  /* show buy in one click modal end*/
});