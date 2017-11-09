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
    $(".product-card__delivery").hide();
  } else if ($(this).hasClass("product-card__tab--description")) {
    $(".product-card__characteristics").hide();
    $(".product-card__description").show();
    $(".product-card__reviews").hide();
    $(".product-card__delivery").hide();
  } else if ($(this).hasClass("product-card__tab--reviews")) {
    $(".product-card__characteristics").hide();
    $(".product-card__description").hide();
    $(".product-card__reviews").show();
    $(".product-card__delivery").hide();
  } else {
    $(".product-card__characteristics").hide();
    $(".product-card__description").hide();
    $(".product-card__reviews").hide();
    $(".product-card__delivery").show();
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


/* Foods personal - profile edit */

$(".profile-actions__action-button--edit").click(function(e) {
  e.preventDefault();
  $(".personal__profile-info").hide();
  $(".personal__profile-actions").hide();
  $(".personal__profile-edit").show();
});

$(".profile-edit__form-reset").click(function(e) {
  e.preventDefault();
  $(".personal__profile-info").show();
  $(".personal__profile-actions").show();
  $(".personal__profile-edit").hide();
});


/* Foods personal - address edit */

$(".address-actions__action-button--add").click(function(e) {
  e.preventDefault();
  $(".personal__address-info").hide();
  $(".personal__address-actions").hide();
  $(".personal__address-edit").show();
});

$(".address-edit__form-reset").click(function(e) {
  e.preventDefault();
  $(".personal__address-info").show();
  $(".personal__address-actions").show();
  $(".personal__address-edit").hide();
});


/* Foods order - payment method */

$(".order-payment__method-item").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".order-payment__method-item").length; i++) {
    $($(".order-payment__method-item")[i]).removeClass("order-payment__method-item--active");
  }
  $(this).addClass("order-payment__method-item--active");
});