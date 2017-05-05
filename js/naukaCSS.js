var input = document.querySelector('#customInput');
var charCount = document.querySelector('#charCount');
var onKeyDown = function(){
  charCount.textContent = input.value.length;
};
input.addEventListener('keyup',onKeyDown);


///-------------mouseMove-------------------------

var posX = document.getElementById('posX');
var posY = document.getElementById('posY');
var posPX = document.getElementById('posPX');
var posPY = document.getElementById('posPY');


document.addEventListener('mousemove',function(e){
  var x = e.clientX;
  var y = e.clientY;
  
  var px = e.pageX;
  var py = e.pageY;
  
  posX.textContent = x;
  posY.textContent = y;
  
  posPX.textContent = px;
  posPY.textContent = py;
})