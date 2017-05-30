//------------sticky Nav------------------------

var nav = document.querySelector('#main');
var topOfNav = nav.offsetTop;//granica od gory elementu nav w px
function fixNav(){
  console.log(topOfNav, window.scrollY);
  if(window.scrollY >= topOfNav){
    document.body.style.paddingTop = nav.offsetHeight+"px";
    document.body.classList.add('fixed-nav');
  }
  else{
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll',fixNav);


//------------------------Blur Effects -----------------
var foto = document.querySelector('#photoToChange');

var blur = document.querySelector('#blur');
function showBlur(){
  var blur2 = blur.value;
  foto.style.webkitFilter = "blur("+blur2+"px)"
}
blur.addEventListener('mousemove',showBlur);

var spacing = document.querySelector('#spacing');
function showSpacing(){
  var spacing2 = spacing.value;
  foto.style.padding = spacing2+'px';
}
spacing.addEventListener('mousemove',showSpacing);

var background = document.querySelector('#base');
function showColor(){
  var base2 = background.value;
  foto.style.backgroundColor = base2;
}
background.addEventListener('change',showColor);

//------------------------canvas------------------------
var canvas = document.querySelector('#draw');
var ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
//blande mode
//ctx.globalCompositeOperation = 'multiply';
let isDrawing = false;
let lastX = 0;
let lastY = 0;
//malowanie kolorami
let hue = 0;
let direction = true;
function draw(e){
  if(!isDrawing) return; //kiedy klawisz nie jest klikniety nie maluje 
  ctx.strokeStyle = `hsl(${hue},100%,50%)`;
  ctx.beginPath();
  //zaczynamy od
  ctx.moveTo(lastX,lastY);
  //i malujemy do
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
//  lastX = e.offsetX;
//  lastY = e.offsetY;
  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
canvas.addEventListener('mousedown',function(e){
  isDrawing = true;
  lastX = e.offsetX;
  lastY = e.offsetY;
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',function(){
  isDrawing = false;
});
canvas.addEventListener('mouseout',function(){
  isDrawing = false;
});


///-----------------------end of canvas-------------------


//-------------------------flexGalleryPanel----------------


$(document).ready(function(){
  var slajd = $('.slajd');
  var active = $('.bg1');
  slajd.click(function(){
    if (active.hasClass('open')){
      active.removeClass('open');
    }
    active = $(this).addClass('open');
  });
  slajd.dblclick(function(){
    $(this).removeClass('open');
  });
});


var button3d = document.querySelector('#coolButton');

button3d.addEventListener('click',function(e){
  e.preventDefault();
});







