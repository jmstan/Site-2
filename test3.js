$(document).ready(function() {

$('.stop').on('click', function(event){
  $('.yellow').fadeOut('slow', function(event){
    $(this).remove();
  });
});


$('body').on('keyup', function(event){
  $('.green').fadeOut('slow', function(event){
    $(this).remove();
  });
});


$('.stop2').on('click', function(event){
  $('.blue').fadeOut('slow', function(event){
    $(this).remove();
  });
});


$('.stop3').on('click', function(event){
  $('.red').fadeOut('slow', function(event){
    $(this).remove();
  });
});


$('.close').click(function() {
  $('.grid-3').hide('slow', function() {
   
  });
});


$('.open').click(function() {
  $('.grid-3').show('slow', function() {
    
  });
});


});

