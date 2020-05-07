

// Initiate the wowjs animation library
new WOW().init();

// Review carousel 
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  items: 1
});

// plane change js

var isMonthly = true;
var currentServing = 25;
var prevId = 'b1';

function changePlan(serving, id = '') {
  var candyPrice = isMonthly ? serving * 2 : serving*12;
  var lollipopPrice = isMonthly ? serving : serving * 0.5*12;
  currentServing = serving;
  $("#lollipop-price").html(`${lollipopPrice}`);
  $("#candy-price").html(`${candyPrice}`);
  $("#saving-price").html(`${candyPrice - lollipopPrice}`);
  $(".serving").html(`${serving}`);
  if(isMonthly)$(".period").html('per month');
  else $(".period").html('per year');
  if (id != '')
    removeClass(id);

}
// change ui of button so that selected serving is highlighted
function removeClass(id) {
  $(`#${prevId}`).removeClass('btn-primary');
  $(`#${prevId}`).addClass('btn-outline-primary');
  $(`#${id}`).removeClass('btn-outline-primary');
  $(`#${id}`).addClass('btn-primary');
  prevId = id;
}

$("#slider").change(function () {
  isMonthly = this.checked;
  changePlan(currentServing);
});