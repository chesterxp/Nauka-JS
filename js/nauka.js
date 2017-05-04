//$(document).ready(function () {
//  $('.title').hide();
//  $('#link1').click(function () {
//    $('.title').hide();
//    $('#title1').show();
//  });
//  $('#link2').click(function () {
//    $('.title').hide();
//    $('#title2').show();
//  });
//  $('#link3').click(function () {
//    $('.title').hide();
//    $('#title3').show();
//  });
//  $('#link4').click(function () {
//    $('.title').hide();
//    $('#title4').show();
//  });
//  
//  
//  
//});

//$('#contactMe').click(function(){
//  $('body').addClass('modal-open');
//})

var contactMe = document.getElementById('contactMe');

contactMe.addEventListener('click',function(){
  document.body.classList.add('modal-open');
},false);

var close = document.getElementById('close');

close.addEventListener('click',function(){
  document.body.classList.remove('modal-open');
},false);


document.addEventListener('keyup',function(e){
  var x = e.keyCode;
  console.log(x);
  if (x==27){
    document.body.classList.remove('modal-open');
  }
});

var contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit',function(e){
  e.preventDefault();
  document.body.classList.remove('modal-open');
})

//$('#modal1').mouseleave().click(function(){
//  $('body').removeClass('modal-open');
//});