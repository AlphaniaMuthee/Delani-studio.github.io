$(document).ready(function(){
  $(".clickable").click(function() {
    $(".design-showing").toggle();
    $(".design-hidden").toggle();
  });
  $(".clickable1").click(function() {
    $(".dev-showing").toggle();
    $(".dev-hidden").toggle();
  });
  $(".clickable2").click(function() {
    $(".product-showing").toggle();
    $(".product-hidden").toggle();
  });
});
