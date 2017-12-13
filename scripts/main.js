/* Foods popup - close button */

$(".foods-popup__close-button").click(function() {
  $(".foods-overlay").hide();
  $(".foods-popup").hide();
});


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


/* Foods header - cart */

$(".foods-header__personal-item--cart").click(function(e) {
  e.preventDefault();
  $(".foods-header__cart").toggleClass("foods-header__cart--active");
});


/* Foods top - search */

$(".foods-top--dark .foods-top__search-submit").click(function(e) {
  if ($(this).hasClass("foods-top__search-submit--button")) {
    e.preventDefault();
    $(".foods-top__search-form").addClass("foods-top__search-form--visible");
    $(".foods-top--dark input[name='foods-top__search-field']").show();
    $(".foods-top--dark input[name='foods-top__search-reset']").show();
    $(this).removeClass("foods-top__search-submit--button");
  } else {
    setTimeout(submitForm, 100);
  }
    
  function submitForm() {
    $(".foods-top__search-form").submit();
  };
});

$(document).click(function (e) {
  var searchForm = $(".foods-top__search-form--visible");
  if ((!searchForm.is(e.target)) && (searchForm.has(e.target).length === 0) && ($(".foods-container").css("width") == "690px")) {
    $(searchForm).removeClass("foods-top__search-form--visible");
    $(".foods-top--dark .foods-top__search-form::after").hide();
    $(".foods-top--dark input[name='foods-top__search-field']").hide();
    $(".foods-top--dark input[name='foods-top__search-reset']").hide();
    $(".foods-top__search-submit").addClass("foods-top__search-submit--button");
  }
});

$(window).resize(function() {
  if ($(".foods-container").css("width") == "1180px") {
    $(".foods-top").removeClass("foods-top--dark");
  } else {
    $(".foods-top").addClass("foods-top--dark");
  }
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

$(window).resize(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".product-card__tab--delivery").text("Доставка");
  } else {
    $(".product-card__tab--delivery").text("Условия доставки");
  }
});

$(document).ready(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".product-card__tab--delivery").text("Доставка");
  } else {
    $(".product-card__tab--delivery").text("Условия доставки");
  }
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


/* Foods product card reviews - form */

$(".product-card__reviews-button").click(function() {
  $(".add-review-form").toggleClass("add-review-form--open");
  $(this).hide();
});

$(".add-review-form__reset").click(function() {
  $(".add-review-form").toggleClass("add-review-form--open");
  $(".product-card__reviews-button").show();
});


/* Foods subsection - buttons */

$(window).resize(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".foods-subsection__item").text("");
    $(".exit-button").text("user@mail.com");
  } else {
    $(".foods-subsection__item--personal").text("Личные данные");
    $(".foods-subsection__item--cart").text("Корзина");
    $(".foods-subsection__item--subscription").text("Подписка на продукты");
    $(".foods-subsection__item--history").text("Прошлые покупки");
    $(".foods-subsection__item--favorites").text("Избранное");
    $(".exit-button").text("Выход");
  }
});

$(document).ready(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".foods-subsection__item").text("");
    $(".exit-button").text("user@mail.com");
  } else {
    $(".foods-subsection__item--personal").text("Личные данные");
    $(".foods-subsection__item--cart").text("Корзина");
    $(".foods-subsection__item--subscription").text("Подписка на продукты");
    $(".foods-subsection__item--history").text("Прошлые покупки");
    $(".foods-subsection__item--favorites").text("Избранное");
    $(".exit-button").text("Выход");
  }
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

$(window).resize(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".address-info__item-edit button").text("Редактировать");
  } else {
    $(".address-info__item-edit button").text("Редактировать данные");
  }
});

$(document).ready(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".address-info__item-edit button").text("Редактировать");
  } else {
    $(".address-info__item-edit button").text("Редактировать данные");
  }
});


/* Foods order - payment method */

$(".order-payment__method-item").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".order-payment__method-item").length; i++) {
    $($(".order-payment__method-item")[i]).removeClass("order-payment__method-item--active");
  }
  $(this).addClass("order-payment__method-item--active");
});


/* Foods order - hint */

$(".payment-method__hint-icon").click(function(e) {
  e.preventDefault();
  $(this).toggleClass("payment-method__hint-icon--active");
});


/* Foods order - payment instruction */

$(".payment-instruction__button").click(function(e) {
  e.preventDefault();
  $(".payment-instruction__description").toggleClass("payment-instruction__description--visible");
  $(this).toggleClass("payment-instruction__button--active");
});


/* Foods - add/remove favorites button */

$(".foods-goods__product-favorite").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass("foods-goods__product-favorite--in")) {
    $(this).removeClass("foods-goods__product-favorite--in");
    $(this).addClass("foods-goods__product-favorite--out");
  } else {
    $(this).removeClass("foods-goods__product-favorite--out");
    $(this).addClass("foods-goods__product-favorite--in");
  }
});

$(".foods-cart__item-favorites button").click(function() {
  if ($(this).parent().hasClass("foods-cart__item-favorites--in")) {
    $(this).parent().removeClass("foods-cart__item-favorites--in");
    $(this).parent().addClass("foods-cart__item-favorites--out");
  } else {
    $(this).parent().removeClass("foods-cart__item-favorites--out");
    $(this).parent().addClass("foods-cart__item-favorites--in");
  }
});


/* Foods - advanced search */

$(".foods-top .advanced-search__button").click(function() {
  if ($(this).hasClass("advanced-search__button--active")) {
    $(".foods-top .advanced-search__form").slideUp();
    $(this).removeClass("advanced-search__button--active");
    $(".foods-top__search").removeClass("foods-top__search--active");
    $(".foods-content .foods-section--search-results:nth-of-type(1) .foods-search__results").removeClass("foods-search__results--active");
  } else {
    $(".foods-top .advanced-search__form").slideDown();
    $(this).addClass("advanced-search__button--active");
    $(".foods-top__search").addClass("foods-top__search--active");
    $(".foods-content .foods-section--search-results:nth-of-type(1) .foods-search__results").addClass("foods-search__results--active");
  } 
});


/* Foods - advanced search - slider range (jQuery UI) */

$( function() {
    $( ".advanced-search__price-range" ).slider({
      range: true,
      min: 100,
      max: 9999,
      values: [ 100, 5000 ],
      slide: function( event, ui ) {
        $( "#advanced-search__min-price" ).val( ui.values[ 0 ] );
        $( "#advanced-search__max-price" ).val( ui.values[ 1 ] );
      }
    });
    $( "#advanced-search__min-price" ).val( $( ".advanced-search__price-range" ).slider( "values", 0 ) );
    $( "#advanced-search__max-price" ).val( $( ".advanced-search__price-range" ).slider( "values", 1 ) );
  } );


/* Foods history - all checkbox checked */

$("label[for='foods-orders__checkbox--all']").click(function(e) {
  e.preventDefault();
  if ($(this).hasClass("foods-orders__checkbox--all-checked")) {
    for (var i = 0; i < $(".foods-orders__checkbox").length; i++) {
      $($(".foods-orders__checkbox")[i]).removeAttr("checked");
    }
    $(this).removeClass("foods-orders__checkbox--all-checked");
  } else {
    for (var i = 0; i < $(".foods-orders__checkbox").length; i++) {
      $($(".foods-orders__checkbox")[i]).attr("checked", "checked");
    }
    $(this).addClass("foods-orders__checkbox--all-checked");
  }
});


/* jQuery Form Styler activation */

(function($) {
$(function() {

  $('select').styler();
    
});
})(jQuery);
