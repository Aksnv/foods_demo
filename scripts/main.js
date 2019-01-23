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


/* Foods header - personal menu */

$(".foods-header--white .foods-header__personal-button").click(function() {
  $(this).toggleClass("foods-header__personal-button--close");
  $(".foods-header__personal").toggleClass("foods-header__personal--active");
  var personalHeight = $(".foods-header__personal--active ul").css("height");
  $(".foods-header__personal--active").css("height", personalHeight);
  if ($(this).hasClass("foods-header__personal-button--close")) {
    if ($(".foods-container").css("width") == "320px") {
      $(".foods-header__personal").css("height", "110px");
    } else if ($(".foods-container").css("width") == "690px") {
      $(".foods-header__personal").css("height", "140px");
    }
  }
});

$(window).resize(function() {
  if ($(".foods-container").css("width") == "1180px") {
    $(".foods-header__personal-button").removeClass("foods-header__personal-button--close");
    $(".foods-header__personal").removeClass("foods-header__personal--active");
    $(".foods-header__personal").css("height", "58px");
  }
});


/* Foods menu */

$(".foods-menu__menu-button").click(function() {
  $(this).toggleClass("foods-menu__menu-button--close");
  $(".foods-menu").toggleClass("foods-menu--active");
  $(".foods-content--left").toggleClass("foods-content--active");
  $(".foods-header").toggleClass("foods-header--active");
  var catalogHeight = $(".foods-content--left.foods-content--active").css("height");
  $(".foods-menu--active ul").css("top", catalogHeight);
  if ($(".foods-container").css("width") == "690px") {
    $(".foods-top--dark").toggleClass("foods-top--active");
  }
});

$(window).resize(function() {
  if ($(".foods-container").css("width") == "1180px") {
    $(".foods-menu__menu-button").removeClass("foods-menu__menu-button--close");
    $(".foods-menu").removeClass("foods-menu--active");
    $(".foods-content--left").removeClass("foods-content--active");
    $(".foods-header").removeClass("foods-header--active");
    $(".foods-top--dark").removeClass("foods-top--active");
  }
});


/* Foods top - search */

$(window).resize(function() {
  if ($(".foods-container").css("width") == "1180px") {
    $(".foods-top__search-submit").removeClass("foods-top__search-submit--button");
    $("input[name='foods-top__search-field']").show();
    $("input[name='foods-top__search-reset']").show();
  } else if ($(".foods-container").css("width") == "690px") {
    if ($(".foods-top").hasClass("foods-top--dark")) {
      $(".foods-top__search-submit").addClass("foods-top__search-submit--button");
    } else {
      $(".foods-top__search-submit").removeClass("foods-top__search-submit--button");
      $("input[name='foods-top__search-field']").show();
      $("input[name='foods-top__search-reset']").show();
      $(".foods-header__personal").css("height", "140px");
    }
  } else if ($(".foods-container").css("width") == "320px") {
    $(".foods-top__search-submit").addClass("foods-top__search-submit--button");
    $("input[name='foods-top__search-field']").hide();
    $("input[name='foods-top__search-reset']").hide();
    $(".foods-header__personal").css("height", "110px");
    if ($(".foods-top__search").hasClass("foods-top__search--advanced")) {
      $(".foods-header").addClass("foods-header--search");
      $(".foods-top__search-form").addClass("foods-top__search-form--visible");
      $(".foods-top__search-submit").removeClass("foods-top__search-submit--button");
      $("input[name='foods-top__search-field']").show();
      $("input[name='foods-top__search-reset']").show();
    }
  }
});

$(document).ready(function() {
  if ($(".foods-container").css("width") == "1180px") {
    $(".foods-top__search-submit").removeClass("foods-top__search-submit--button");
  } else if ($(".foods-container").css("width") == "690px") {
    if ($(".foods-top").hasClass("foods-top--dark")) {
      $(".foods-top__search-submit").addClass("foods-top__search-submit--button");
    } else {
      $(".foods-top__search-submit").removeClass("foods-top__search-submit--button");
    }
  } else if ($(".foods-container").css("width") == "320px") {
    $(".foods-top__search-submit").addClass("foods-top__search-submit--button");
    if ($(".foods-top__search").hasClass("foods-top__search--advanced")) {
      $(".foods-header").addClass("foods-header--search");
      $(".foods-top__search-form").addClass("foods-top__search-form--visible");
      $(".foods-top__search-submit").removeClass("foods-top__search-submit--button");
      $("input[name='foods-top__search-field']").show();
      $("input[name='foods-top__search-reset']").show();
    }
  }
});

$(".foods-top__search-submit").click(function(e) {
  if ($(this).hasClass("foods-top__search-submit--button")) {
    e.preventDefault();
    $(".foods-top__search-form").addClass("foods-top__search-form--visible");
    $(".foods-top input[name='foods-top__search-field']").show();
    $(".foods-top input[name='foods-top__search-reset']").show();
    $(".foods-header").addClass("foods-header--search");
    $(this).removeClass("foods-top__search-submit--button");
  } else {
    setTimeout(submitForm, 100);
  }
    
  function submitForm() {
    $(".foods-top__search-form").submit();
  };
});

$(document).click(function(e) {
  if ($(".foods-top__search").hasClass("foods-top__search--advanced")) {
    e.preventDefault();
  } else {
    var searchForm = $(".foods-top__search-form--visible");
    if ((!searchForm.is(e.target)) && (searchForm.has(e.target).length === 0) && ($(".foods-container").css("width") == "690px")) {
      if ($(".foods-top").hasClass("foods-top--dark")) {
        $(searchForm).removeClass("foods-top__search-form--visible");
        $(".foods-top .foods-top__search-form::after").hide();
        $(".foods-top input[name='foods-top__search-field']").hide();
        $(".foods-top input[name='foods-top__search-reset']").hide();
        $(".foods-header").removeClass("foods-header--search");
        $(".foods-top__search-submit").addClass("foods-top__search-submit--button");
      }
    } else if ((!searchForm.is(e.target)) && (searchForm.has(e.target).length === 0) && ($(".foods-container").css("width") == "320px")) {
      $(searchForm).removeClass("foods-top__search-form--visible");
      $(".foods-top .foods-top__search-form::after").hide();
      $(".foods-top input[name='foods-top__search-field']").hide();
      $(".foods-top input[name='foods-top__search-reset']").hide();
      $(".foods-header").removeClass("foods-header--search");
      $(".foods-top__search-submit").addClass("foods-top__search-submit--button");
    }
  }
});


/* Foods slider */

function foodsSlider() {
  for (var i = 0; i < $(".foods-slider__gallery-image").length; i++) {
    if ($($(".foods-slider__gallery-image")[i]).hasClass("foods-slider__gallery-image--active")) {
      if (i == 3) {
        $($(".foods-slider__gallery-image")[i]).removeClass("foods-slider__gallery-image--active");
        $($(".foods-slider__gallery-image")[0]).addClass("foods-slider__gallery-image--active");
        for (var j = 0; j < $(".foods-slider__pagination-button").length; j++) {
          $($(".foods-slider__pagination-button")[j]).removeClass("foods-slider__pagination-button--active");
        }
        $($(".foods-slider__pagination-button")[i]).removeClass("foods-slider__pagination-button--active");
        $($(".foods-slider__pagination-button")[0]).addClass("foods-slider__pagination-button--active");
        break;
      } else {
        $($(".foods-slider__gallery-image")[i]).removeClass("foods-slider__gallery-image--active");
        $($(".foods-slider__gallery-image")[i + 1]).addClass("foods-slider__gallery-image--active");
        for (var j = 0; j < $(".foods-slider__pagination-button").length; j++) {
          $($(".foods-slider__pagination-button")[j]).removeClass("foods-slider__pagination-button--active");
        }
        $($(".foods-slider__pagination-button")[i]).removeClass("foods-slider__pagination-button--active");
        $($(".foods-slider__pagination-button")[i + 1]).addClass("foods-slider__pagination-button--active");
        break;
      }
    }
  }
};

setInterval(foodsSlider, 3000);

$(".foods-slider__pagination-button").click(function(e) {
  e.preventDefault();
  for (var i = 0; i < $(".foods-slider__pagination-button").length; i++) {
    $($(".foods-slider__pagination-button")[i]).removeClass("foods-slider__pagination-button--active");
    $($(".foods-slider__gallery-image")[i]).removeClass("foods-slider__gallery-image--active");
  }
  $(this).addClass("foods-slider__pagination-button--active");
  var num = $(this).attr("class").charAt(65);
  $($(".foods-slider__gallery-image")[num - 1]).addClass("foods-slider__gallery-image--active");
});


/* Foods catalog */

$(document).ready(function() {
  
  function catalogItemActiveArrow() {
    var catalogItemHeight = $(".foods-catalog__goods-item--active").css("height").substr(0,2);
    catalogItemHeight = +catalogItemHeight;
    console.log(catalogItemHeight);
    $(".foods-catalog__goods-item--active-arrow").css("width", catalogItemHeight*0.70);
    $(".foods-catalog__goods-item--active-arrow").css("height", catalogItemHeight*0.70);
    $(".foods-catalog__goods-item--active-arrow").css("right", -catalogItemHeight*0.70/2);
    $(".foods-catalog__goods-item--active-arrow").css("top", (catalogItemHeight-catalogItemHeight*0.70)/2);
  };

  setTimeout(catalogItemActiveArrow, 500);
  
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
  if (($(".foods-container").css("width") == "690px") && ($(".foods-top").hasClass("foods-top--dark")) || 
    ($(".foods-container").css("width") == "320px") && ($(".foods-top").hasClass("foods-top--dark"))) {
    $(".foods-subsection__item").text("");
    $(".exit-button").text("user@mail.com");
  } else {
    $(".foods-subsection__item--personal").text("Личные данные");
    $(".foods-subsection__item--cart").text("Корзина");
    $(".foods-subsection__item--subscription").text("Подписка на продукты");
    $(".foods-subsection__item--history").text("Прошлые покупки");
    $(".foods-subsection__item--favorites").text("Избранное");
    $(".foods-subsection__item--messages").text("Сообщения");
    $(".exit-button").text("Выход");
  }
});

$(document).ready(function() {
  if (($(".foods-container").css("width") == "690px") && ($(".foods-top").hasClass("foods-top--dark")) || 
    ($(".foods-container").css("width") == "320px") && ($(".foods-top").hasClass("foods-top--dark"))) {
    $(".foods-subsection__item").text("");
    $(".exit-button").text("user@mail.com");
  } else {
    $(".foods-subsection__item--personal").text("Личные данные");
    $(".foods-subsection__item--cart").text("Корзина");
    $(".foods-subsection__item--subscription").text("Подписка на продукты");
    $(".foods-subsection__item--history").text("Прошлые покупки");
    $(".foods-subsection__item--favorites").text("Избранное");
    $(".foods-subsection__item--messages").text("Сообщения");
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

$(".order-payment__form .foods-carousel-button--right").click(function(e) {
  e.preventDefault();
  if ($(".foods-container").css("width") == "690px") {
    $(this).addClass("foods-carousel-button--disabled");
    $(".order-payment__form .foods-carousel-button--left").removeClass("foods-carousel-button--disabled");
    $(".order-payment__method li.order-payment__method--1").hide();
    $(".order-payment__method li.order-payment__method--2").hide();
    $(".order-payment__method li.order-payment__method--3").hide();
    $(".order-payment__method li.order-payment__method--4").hide();
    $(".order-payment__method li.order-payment__method--5").css("display", "inline-block");
    $(".order-payment__method li.order-payment__method--6").css("display", "inline-block");
    $(".order-payment__method li.order-payment__method--7").css("display", "inline-block");
  }
});

$(".order-payment__form .foods-carousel-button--left").click(function(e) {
  e.preventDefault();
  if ($(".foods-container").css("width") == "690px") {
    $(this).addClass("foods-carousel-button--disabled");
    $(".order-payment__form .foods-carousel-button--right").removeClass("foods-carousel-button--disabled");
    $(".order-payment__method li.order-payment__method--5").hide();
    $(".order-payment__method li.order-payment__method--6").hide();
    $(".order-payment__method li.order-payment__method--7").hide();
    $(".order-payment__method li.order-payment__method--1").css("display", "inline-block");
    $(".order-payment__method li.order-payment__method--2").css("display", "inline-block");
    $(".order-payment__method li.order-payment__method--3").css("display", "inline-block");
    $(".order-payment__method li.order-payment__method--4").css("display", "inline-block");
  }
});


/* Foods order - notes */

$(window).resize(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".confirmation__form-notes label:nth-of-type(2)").text("Уведомления о состоянии заказа на почту");
  } else {
    $(".confirmation__form-notes label:nth-of-type(2)").text("Присылать уведомления о состоянии заказа на почту");
  }
});

$(document).ready(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".confirmation__form-notes label:nth-of-type(2)").text("Уведомления о состоянии заказа на почту");
  } else {
    $(".confirmation__form-notes label:nth-of-type(2)").text("Присылать уведомления о состоянии заказа на почту");
  }
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


/* Foods order - file & certificate hide */

$(document).ready(function() {
  if ($(".foods-container").css("width") == "320px") {
    for (var i = 1; i <= $(".foods-cart__item").length; i++) {
      if ($(".foods-cart__item--" + i + " .foods-cart__item-certificate").text() == "") {
        $(".foods-cart__item--" + i + " .foods-cart__item-certificate").hide();
      }
      if ($(".foods-cart__item--" + i + " .foods-cart__item-file").text() == "") {
        $(".foods-cart__item--" + i + " .foods-cart__item-file").hide();
      }
    }
  } 
});

$(window).resize(function() {
  if ($(".foods-container").css("width") == "320px") {
    for (var i = 1; i <= $(".foods-cart__item").length; i++) {
      if ($(".foods-cart__item--" + i + " .foods-cart__item-certificate").text() == "") {
        $(".foods-cart__item--" + i + " .foods-cart__item-certificate").hide();
      }
      if ($(".foods-cart__item--" + i + " .foods-cart__item-file").text() == "") {
        $(".foods-cart__item--" + i + " .foods-cart__item-file").hide();
      }
    }
  } else {
    for (var i = 1; i <= $(".foods-cart__item").length; i++) {
      $(".foods-cart__item--" + i + " .foods-cart__item-certificate").show();
      $(".foods-cart__item--" + i + " .foods-cart__item-file").show();
    }
  }
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
    /*$(".foods-content .foods-section--search-results:nth-of-type(1) .foods-search__results").removeClass("foods-search__results--active");*/
  } else {
    $(".foods-top .advanced-search__form").slideDown();
    $(this).addClass("advanced-search__button--active");
    $(".foods-top__search").addClass("foods-top__search--active");
    /*$(".foods-content .foods-section--search-results:nth-of-type(1) .foods-search__results").addClass("foods-search__results--active");*/
  } 
});

/*$(window).resize(function() {
  if ($(".foods-container").css("width") == "690px") {
    $(".foods-top .advanced-search__form").hide();
    $(".foods-top--search-results .foods-top__search").removeClass("foods-top__search--active");
    $(".foods-search__results").removeClass("foods-search__results--active");
    $(".foods-top--search-results .advanced-search__button").removeClass("advanced-search__button--active");
  } else {
    $(".foods-top--search .foods-top__search").removeClass("foods-top__search--active");
    $(".foods-top--search .advanced-search__button").removeClass("advanced-search__button--active");
  }
});*/


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


/* Foods - OpenBonus */

$(".bonus-programm__content button").click(function () {
  $(".bonus-programm__personal").addClass("bonus-programm__personal--visible");
  $(".bonus-programm").addClass("bonus-programm--personal");
  $(this).hide();
});

$(".bonus-programm--login .bonus-card__form .reset").click(function () {
  $(".bonus-programm__personal").removeClass("bonus-programm__personal--visible");
  $(".bonus-programm").removeClass("bonus-programm--personal");
  $(".bonus-programm__content button").show();
});


/* Foods footer - subscription form */

$(".foods-footer__subscription-button").click(function() {
  $(this).hide();
  $(".foods-footer__subscription-form").addClass("foods-footer__subscription-form--visible");
});

$(document).click(function(e) {
  var subscriptionForm = $(".foods-footer__subscription-form");
  if ((!$(".foods-footer__subscription-button").is(e.target)) && (!subscriptionForm.is(e.target)) && (subscriptionForm.has(e.target).length === 0) && ($(".foods-container").css("width") == "320px")) {
    $(subscriptionForm).removeClass("foods-footer__subscription-form--visible");
    $(".foods-footer__subscription-button").show();
  }
});


/* Foods messages - Select all */

$(".foods-messages__header-button--select-all").click(function() {
  if ($(this).hasClass("foods-messages__header-button--checked")) {
    $(this).removeClass("foods-messages__header-button--checked");
    for (var i = 0; i < $(".foods-messages__item-flag input").length; i++) {
      $($(".foods-messages__item-flag input")[i]).removeAttr("checked");
    }
  } else {
    $(this).addClass("foods-messages__header-button--checked");
    for (var i = 0; i < $(".foods-messages__item-flag input").length; i++) {
      $($(".foods-messages__item-flag input")[i]).attr("checked", "checked");
    }
  }
});


/* Foods messages - Mark as read */

$(".foods-message__item-mark label").click(function() {
  if ($(this).hasClass("marked")) {
    $(this).text("Отметить как не прочитанное");
    $(this).removeClass("marked");
  } else {
    $(this).text("Отметить как прочитанное");
    $(this).addClass("marked");
  }
});


/* Foods messages - Show/close messages */

$(".foods-message__item").click(function() {
  $(this).toggleClass("foods-message__item--open");
  $(".foods-message__show-all-button").removeClass("foods-message__show-all-button--close");
  $(".foods-message__show-all-button").text("Свернуть все");
});

$(".foods-message__show-all-button").click(function() {
  if ($(this).hasClass("foods-message__show-all-button--close")) {
    for (var i = 0; i < $(".foods-message__item").length; i++) {
      $($(".foods-message__item")[i]).addClass("foods-message__item--open");
    }
    $(this).removeClass("foods-message__show-all-button--close");
    $(this).text("Свернуть все");
  } else {
    for (var i = 0; i < $(".foods-message__item").length; i++) {
      $($(".foods-message__item")[i]).removeClass("foods-message__item--open");
    }
    $(this).addClass("foods-message__show-all-button--close");
    $(this).text("Развернуть все");
  }
});


/* Foods messages - Content */

$(window).resize(function() {
  if ($(".foods-container").css("width") == "320px") {
    $(".foods-messages__header-button--new-message").text("Новое");
    $(".foods-messages__header-button--new-message").css("width", "120px");
  } else {
    $(".foods-messages__header-button--new-message").text("Новое сообщение");
    $(".foods-messages__header-button--new-message").css("width", "224px");
  }
});

$(document).ready(function() {
  if ($(".foods-container").css("width") == "320px") {
    $(".foods-messages__header-button--new-message").text("Новое");
    $(".foods-messages__header-button--new-message").css("width", "120px");
  } else {
    $(".foods-messages__header-button--new-message").text("Новое сообщение");
    $(".foods-messages__header-button--new-message").css("width", "224px");
  }
});


/* jQuery Form Styler activation */

(function($) {
$(function() {

  $('select').styler();
    
});
})(jQuery);
