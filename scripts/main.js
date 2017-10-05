/* Foods popup - enter / registration */

$(".foods-popup__header-block--enter").click(function() {
  $(this).addClass("foods-popup__header-block--action");
  $(".foods-popup__header-block--registration").removeClass("foods-popup__header-block--action");
  $(".foods-popup__form--enter").show();
  $(".foods-popup__form--registration").hide();
});

$(".foods-popup__header-block--registration").click(function() {
  $(this).addClass("foods-popup__header-block--action");
  $(".foods-popup__header-block--enter").removeClass("foods-popup__header-block--action");
  $(".foods-popup__form--registration").show();
  $(".foods-popup__form--enter").hide();
});


/* Foods product card - tabs */

$(".product-card__tab").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".product-card__tab").length; i++) {
    $($(".product-card__tab")[i]).removeClass("product-card__tab--active");
  };
  $(this).addClass("product-card__tab--active");

  if ($(this).hasClass("product-card__tab--characteristics")) {
    $(".product-card__characteristics").show();
    $(".product-card__description").hide();
    $(".product-card__reviews").hide();
  } else if ($(this).hasClass("product-card__tab--description")) {
    $(".product-card__characteristics").hide();
    $(".product-card__description").show();
    $(".product-card__reviews").hide();
  } else {
    $(".product-card__characteristics").hide();
    $(".product-card__description").hide();
    $(".product-card__reviews").show();
  };
});


/* Foods product card reviews - tabs */

$(".product-card__reviews-tab").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".product-card__reviews-tab").length; i++) {
    $($(".product-card__reviews-tab")[i]).removeClass("product-card__reviews-tab--active");
  };
  $(this).addClass("product-card__reviews-tab--active");

  if ($(this).hasClass("product-card__reviews-tab--all")) {
    $(".product-card__review--positive").show();
    $(".product-card__review--negative").show();
  } else if ($(this).hasClass("product-card__reviews-tab--positive")) {
    $(".product-card__review--positive").show();
    $(".product-card__review--negative").hide();
  } else {
    $(".product-card__review--positive").hide();
    $(".product-card__review--negative").show();
  };
});


/* Foods personal - tabs */

$(".personal__tab").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".personal__tab").length; i++) {
    $($(".personal__tab")[i]).removeClass("personal__tab--active");
  };
  $(this).addClass("personal__tab--active");

  if ($(this).hasClass("personal__tab--profile")) {
    $(".personal__profile").show();
    $(".personal__address").hide();
  } else {
    $(".personal__profile").hide();
    $(".personal__address").show();
  };
});