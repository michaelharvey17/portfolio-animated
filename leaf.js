function leafClick() {
  $(".leaf-wrap").removeClass("leaf-wrap").addClass('leaf-select');
  $('.leaf-text').hide();
  $('.download').show();
};

$(document).ready(function(){

  $('.leaf-click').click(leafClick);
  $('.download').hide();

});