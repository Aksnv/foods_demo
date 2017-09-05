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