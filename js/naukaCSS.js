//-----------------console--------------------------
//------console 1
var wprowadz = document.getElementById('wprowadz');
var zdanie = document.getElementById('zdanie');

wprowadz.addEventListener('keyup',function(){
  var letter = wprowadz.value;
  zdanie.textContent = letter;
});

//------console 2
var typing = document.querySelector('#typing2');
var text = "";
var startTyping = function (){
  typing.textContent = "$";
  text = wprowadz.value;
  var currentIndex = 0;
  if (text===""){
    text = "Skoro nic nie wpisałeś ww. polu to sam  coś wpisze. Witam na mojej stronie z ćwiczeniami CSS oraz JS!!! Have fun!!!"
  }
  var interval = setInterval(function(){
    if (text.length>currentIndex){
    typing.textContent+=text[currentIndex];
    currentIndex+=1;
  } 
    else{
      clearInterval(interval);
    }
  },50 + Math.random()*50)
};

var writeSomething = document.getElementById('writeSomething');
writeSomething.addEventListener('click',startTyping)

///-------------howManyLetters-------------------------
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