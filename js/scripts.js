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
  $("#contact-form").submit(function() {
       alert("Your message has been received. Thankyou for contacting us!");
   });
  $(".black").hover(function(){
    $(".1").slideToggle();
  })
  $(".phoenix").hover(function(){
    $(".2").slideToggle();
  })
  $(".orange").hover(function(){
    $(".3").slideToggle();
  })
  $(".jim-carrey").hover(function(){
    $(".4").slideToggle();
  })
  $(".site").hover(function(){
    $(".5").slideToggle();
  })
  $(".page").hover(function(){
    $(".6").slideToggle();
  })
  $(".burned").hover(function(){
    $(".7").slideToggle();
  })
  $(".giraffe").hover(function(){
    $(".8").slideToggle();
  })
});
