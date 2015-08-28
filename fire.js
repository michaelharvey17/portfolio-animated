function fireClick() {
    $('#trunk1').animate({
      left: "-=30em"
    }, 5000, function(){
    });
    $('#trunk2').animate({
      right: "-=30em"
    }, 5000, function(){
    });
    $('#branch').animate({
      right: "-=40em"
    }, 5000, function(){
    });
    $('.leaf-wrap').animate({
      right: "-=40em"
    }, 5000, function(){
    });
    $('.leaf-select').animate({
      right: "-=40em"
    }, 5000, function(){
    });
    $('.leaf-stem').animate({
      right: "-=40em"
    }, 5000, function(){
    });
    $('#ground').animate({
      height: "+=50em",
      width: "+=50em",
    }, 5000, function(){
    });
    $('#g-highlight1').animate({
      height: "+=20em",
      width: "+=20em",
    }, 5000, function(){
    });
    $('#fire').animate({
      top: "20em"
    }, 5000, function(){
    });
    $('#fire1, #fire2, #fire3, #fire4, #fire5, #fire6').animate({
      height: "+=2em",
      width: "+=2em",
      left: "+=.1em"
    }, 5000, function(){
    });
    $('#log').animate({
      height: "+=.5em",
      width: "+=2.5em",
      top: "+=40%"
    }, 5000, function(){
    });
    $('#fire-text').stop().animate({
      left: "+=2%",
      top: "-=20.5em",
      fontSize: "3em",
    }, 5000, function(){
    });
    $('#sun, #moon, .star').hide();
    $('#fire-back').show("slow");
    $('.fire-click').off('click');
    $('#social').css({visibility: 'visible'}).animate({opacity: 1}, 5000);
    $('.fire-click').removeClass('fire-click').addClass('fire-unclick');
    $('.fire-unclick, #fire-back').click(fireUnclick);
  };
function fireUnclick() {
  $('#trunk1').animate({
      left: "+=30em"
    }, 5000, function(){
    });
  $('#trunk2').animate({
      right: "+=30em"
    }, 5000, function(){
    });
  $('#branch').animate({
      right: "+=40em"
    }, 5000, function(){
    });
  $('.leaf-wrap').animate({
      right: "+=40em"
    }, 5000, function(){
    });
  $('.leaf-select').animate({
      right: "+=40em"
    }, 5000, function(){
    });
  $('.leaf-stem').animate({
      right: "+=40em"
    }, 5000, function(){
    });
  $('#ground').animate({
      height: "-=50em",
      width: "-=50em",
    }, 5000, function(){
    });
  $('#g-highlight1').animate({
      height: "-=20em",
      width: "-=20em",
    }, 5000, function(){
    });
  $('#fire').animate({
      top: "30em"
    }, 5000, function(){
    });
  $('#fire1, #fire2, #fire3, #fire4, #fire5, #fire6').animate({
      height: "-=2em",
      width: "-=2em",
      left: "-=.1em"
    }, 5000, function(){
    });
  $('#log').animate({
      height: "-=.5em",
      width: "-=2.5em",
      top: "-=40%"
    }, 5000, function(){
    });
  $('#fire-text').stop().animate({
      left: "-=2%",
      top: "+=20.5em",
      fontSize: "1.25em",
    }, 5000, function(){
    });
  $('#sun, #moon, .star').show();
  $('#social').css('visibility', 'hidden');
  $('#fire-back').hide("slow");
  $('.fire-unclick, #fire-back').off('click');
  $('.fire-unclick').removeClass('fire-unclick').addClass('fire-click');
  $('.fire-click').click(fireClick);
};

$(document).ready(function(){
  //makes fire-text an arch
  $('#fire-text').circleType({radius: 385});

  //animation for click on social media
  $('.fire-click').click(fireClick);

  $('#fire-back').hide();
});


