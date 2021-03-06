function buildingClick() {
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
  $('.leaf').animate({
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
    height: "-=45em",
    }, 5000, function(){
  });
  $('#g-highlight1').animate({
    height: "-=45em",
    }, 5000, function(){
  });
  $('#fire').animate({
    left: "-=20em",
    top: "+=10em",
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
  $('#fire-text').animate({
    opacity: "0",
  });
  $('#board').animate({
    left: "-=30em",
    top: "+=25em",
    height: "+=6em",
    width: "+=9em",
    }, 5000, function(){
  });
  $('#support').animate({
    top: "+=20em",
    }, 5000, function(){
  });
  $('#board h1').animate({
    fontSize: "+=1em",
    }, 5000, function(){
  });
  $('#building').animate({
    height: "+=33em",
    width: "+=25em",
    top: "-=20%"
    }, 5000, function(){
  });
  $('#antenna').animate({
    height: "+=15em",
    width: "+=.75em",
    top: "-=40%",
  right: "+=15%",
    }, 5000, function(){
  });
  $('#antenna-light').animate({
    height: "+=.75em",
    width: "+=.75em",
    top: "-=40%",
    right: "+=15%",
    }, 5000, function(){
  });
  $('#antenna-base').animate({
    height: "+=1.5em",
    width: "+=7em",
    top: "-=23.75%",
    right: "+=11%",
    }, 5000, function(){
  });
  $('.window').animate({
    borderWidth: "+=6px",
    marginTop: "+=2%",
    }, 5000, function(){
  });
  $('#building-text').animate({
    fontSize: "+=2em",
    top: "-=30%",
    right: "+=7.5%",
    }, 5000, function(){
  });
  $('#sun, #moon, .star').hide();
  $('.building-click').off('click');
  $('#projects').css({visibility: 'visible'}).animate({opacity: 1}, 5000);
  $('.building-click').removeClass('building-click').addClass('building-unclick');
  $('.building-unclick, #building-back').click(buildingUnclick);
};

function buildingUnclick() {
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
  $('.leaf').animate({
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
    height: "+=45em",
    }, 5000, function(){
  });
  $('#g-highlight1').animate({
    height: "+=45em",
    }, 5000, function(){
  });
  $('#fire').animate({
    left: "+=20em",
    top: "-=10em",
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
  $('#fire-text').animate({
    opacity: "1",
    }, 5000, function(){
  });
  $('#board').animate({
    left: "+=30em",
    top: "-=25em",
    height: "-=6em",
    width: "-=9em",
    }, 5000, function(){
  });
  $('#support').animate({
    top: "-=20em",
    }, 5000, function(){
  });
  $('#board h1').animate({
    fontSize: "-=1em",
    }, 5000, function(){
  });
  $('#building').animate({
    height: "-=33em",
    width: "-=25em",
    top: "+=20%"
    }, 5000, function(){
  });
  $('#antenna').animate({
    height: "-=15em",
    width: "-=.75em",
    top: "+=40%",
  right: "-=15%",
    }, 5000, function(){
  });
  $('#antenna-light').animate({
    height: "-=.75em",
    width: "-=.75em",
    top: "+=40%",
    right: "-=15%",
    }, 5000, function(){
  });
  $('#antenna-base').animate({
    height: "-=1.5em",
    width: "-=7em",
    top: "+=23.75%",
    right: "-=11%",
    }, 5000, function(){
  });
  $('.window').animate({
    borderWidth: "-=6px",
    }, 5000, function(){
  });
  $('#building-text').animate({
    fontSize: "-=2em",
    top: "+=30%",
    right: "-=7.5%",
    }, 5000, function(){
  });
  $('#sun, #moon, .star').show();
  $('.building-unclick').off('click');
  $('#projects').css({visibility: 'hidden'}).animate({opacity: 0}, 5000);
  $('.building-unclick').removeClass('building-unclick').addClass('building-click');
  $('.building-click').click(buildingClick);
};

$(document).ready(function(){

  $('.building-click').click(buildingClick);

});