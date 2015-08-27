function leafClick() {
  $(".leaf").removeClass("leaf").addClass('leaf-select');
  $('.leaf-text').hide();
  $('.download').show();
};

function leafUnclip() {

};

$(document).ready(function(){

  $('.leaf-click').click(leafClick);
  $('.download').hide();

});