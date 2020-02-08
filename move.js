$(document).ready(function(){
    $('.right').click(function(){
        $('#box').css(
        { left: "+=50px"}
        );
    });
});
$(document).ready(function(){
    $('.left').click(function(){
        $('#box').css(
        { left: "-=50px"}
        );
    });
});
$(document).ready(function(){
    $('.down').click(function(){
        $('#box').css(
        { top: "+=50px"}
        );
    });
});
$(document).ready(function(){
    $('.up').click(function(){
        $('#box').css(
        { top: "-=50px"}
        );
    });
});

$(document).keydown(function(e){
//console.log(e.which);
  var key = e.which;
  /** left */
  var left_keys=[65,37];
  if (left_keys.includes(key)) {
    $(".left").click();
  }
});

  $(document).keydown(function(e){
//console.log(e.which);
  var key = e.which;
  /** right */
  var right_keys=[83,39];
  if (right_keys.includes(key)) {
    $(".right").click();
  }





});

 $(document).keydown(function(e){
//console.log(e.which);
  var key = e.which;
  /** up */
  var up_keys=[87,38];
  if (up_keys.includes(key)) {
    $(".up").click();
  }





});



 $(document).keydown(function(e){
//console.log(e.which);
  var key = e.which;
  /** down */
  var up_down=[68,40];
  if (up_down.includes(key)) {
    $(".down").click();
  }





});