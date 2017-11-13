console.log('main.js');

$(document).ready(function(){

  $('.social').on('mouseover', function(){
    $('.social').not($(this)).addClass('hover');
  });

  $('.social').on('mouseout', function(){
    $('.social').not($(this)).removeClass('hover');
  });

  $('#about').click(function() {
    $('html, body').animate({
        scrollTop: $('#about-meg').offset().top
    }, 1000);
  });

  $('#educ').click(function() {
    $('html, body').animate({
        scrollTop: $('#education').offset().top
    }, 2000);
  });

  $('#exp').click(function() {
    $('html, body').animate({
        scrollTop: $('#experiences').offset().top
    }, 2000);
  });

  $('#skill').click(function() {
    $('html, body').animate({
        scrollTop: $('#skills').offset().top
    }, 2000);
  });

  $('#sam').click(function() {
    $('html, body').animate({
        scrollTop: $('#samples').offset().top
    }, 2000);
  });

  $('#showBerkano').click(function(){
    $('#berkanoSlide').slideToggle('10000');
    $('#berkanoArrow', this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
  });

  $('#showTypo').click(function(){
    $('#typoSlide').slideToggle('10000');
    $('#typoArrow', this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
  });

  $('#showDLSU').click(function(){
    $('#dlsuSlide').slideToggle('10000');
    $('#dlsuggArrow', this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
  });

  $('#showTG').click(function(){
    $('#tgSlide').slideToggle('10000');
    $('#tgArrow', this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
  });

  $('#showInfo').click(function(){
    $('#infoSlide').slideToggle('10000');
    $('#infoArrow', this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
  });

  $('#showIllus').click(function(){
    $('#illuSlide').slideToggle('10000');
    $('#illuArrow', this).toggleClass('glyphicon-chevron-up glyphicon-chevron-down');
  });

});
