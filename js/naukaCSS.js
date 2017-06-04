//------------sticky Nav------------------------

var nav = document.querySelector('#main');
var topOfNav = nav.offsetTop;//granica od gory elementu nav w px
function fixNav(){
  //console.log(topOfNav, window.scrollY);
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



//-------------Smooth Scroll ------------------

$('#link1').click(function(){
  $path=$("#boxx1").offset().top;
  console.log('watrosc path'+ $path);
  $('body').animate({scrollTop:$path},1000);
});

$('#link2').click(function(){
  $path=$("#boxx2").offset().top;
  console.log('watrosc path'+ $path);
  $('body').animate({scrollTop:$path},1000);
});

$('#link3').click(function(){
  $path=$("#boxx3").offset().top;
  console.log('watrosc path'+ $path);
  $('body').animate({scrollTop:$path},1000);
});

$('#link4').click(function(){
  $path=$("#boxx4").offset().top;
  console.log('watrosc path'+ $path);
  $('body').animate({scrollTop:$path},1000);
});

//------------------------------designCard--------------------------
$count = 0;
$('#leftarrow').click(function(){
  if($count>0){
    $count--;
    $('#counter').text($count);
  }
});

$('#leftarrow').mousedown(function(){
  $(this).css('box-shadow','0px 0px 0px grey');
});
$('#leftarrow').mouseup(function(){
  $(this).css('box-shadow','0px 3px 1px grey');
});

$('#rightarrow').click(function(){

  if($count<11){
    $count++;
    $('#counter').text($count);
      if($count===11){
        $('#counter').text('MAX');
      }
}
});
$('#rightarrow').mousedown(function(){
  $(this).css('box-shadow','0px 0px 0px grey');
});
$('#rightarrow').mouseup(function(){
  $(this).css('box-shadow','0px 3px 1px grey');
});

$count2 = 0;
$('#leftarrow2').click(function(){
  if($count2>0){
    $count2--;
    $('#counter2').text($count2);
  }
});

$('#leftarrow2').mousedown(function(){
  $(this).css('box-shadow','0px 0px 0px grey');
});
$('#leftarrow2').mouseup(function(){
  $(this).css('box-shadow','0px 3px 1px grey');
});

$('#rightarrow2').click(function(){

  if($count2<11){
    $count2++;
    $('#counter2').text($count2);
      if($count2===11){
        $('#counter2').text('MAX');
      }
}
});
$('#rightarrow2').mousedown(function(){
  $(this).css('box-shadow','0px 0px 0px grey');
});
$('#rightarrow2').mouseup(function(){
  $(this).css('box-shadow','0px 3px 1px grey');
});

var flag = 1;
$('#next').click(function(){
  if (flag==0){
    $("#sidee1").css("z-index","999");
    $("#sidee2").css("z-index","9");
    $("#sidee3").css("z-index","9");
    $("#sidee1").css("transform","translateX(0px) scale(1.5)");
    $("#sidee2").css("transform","translateX(-100px) scale(1)");
    $("#sidee3").css("transform","translateX(100px)");
    flag=1;
  }
  else if(flag==1){
    $("#sidee3").css("z-index","999");
    $("#sidee2").css("z-index","9");
    $("#sidee1").css("z-index","9");
    $("#sidee3").css("transform","translateX(0px) scale(1.5)");
    $("#sidee1").css("transform","translateX(-100px) scale(1)");
    $("#sidee2").css("transform","translateX(100px)");
            flag=2;
  }
  else if(flag==2){
    $("#sidee2").css("z-index","999");
    $("#sidee3").css("z-index","9");
    $("#sidee1").css("z-index","9");
    $("#sidee2").css("transform","translateX(0px) scale(1.5)");
    $("#sidee3").css("transform","translateX(-100px) scale(1)");
    $("#sidee1").css("transform","translateX(100px)");
    flag=0;
  }
});

$('#pre').click(function(){
  if (flag==0){
    $("#sidee3").css("z-index","999");
    $("#sidee2").css("z-index","9");
    $("#sidee1").css("z-index","9");
    $("#sidee3").css("transform","translateX(0px) scale(1.5)");
    $("#sidee1").css("transform","translateX(-100px) scale(1)");
    $("#sidee2").css("transform","translateX(100px)");
    flag=2;
  }
  else if(flag==1){
    $("#sidee2").css("z-index","999");
    $("#sidee3").css("z-index","9");
    $("#sidee1").css("z-index","9");
    $("#sidee2").css("transform","translateX(0px) scale(1.5)");
    $("#sidee3").css("transform","translateX(-100px) scale(1)");
    $("#sidee1").css("transform","translateX(100px)");
    flag=0;
  }
  else if (flag==2){
    $("#sidee1").css("z-index","999");
    $("#sidee2").css("z-index","9");
    $("#sidee3").css("z-index","9");
    $("#sidee1").css("transform","translateX(0px) scale(1.5)");
    $("#sidee2").css("transform","translateX(-100px) scale(1)");
    $("#sidee3").css("transform","translateX(100px)");
    flag=1;
  }
});

//
//$('#next').click(function(){
//  $('#sidee1').css('z-index','999').css("transform","translateX(0px) scale(1.5)").next().css()
//});

$('.kwa').click(function(){
  $(this).css('transform','scale(1.3)')
    .next().css('transform','scale(1)');
});

$('.kwa').click(function(){
  $(this).css('transform','scale(1.3)')
    .prev().css('transform','scale(1)');
});

$('.kwa').click(function(){
  $(this).addClass('big');
});

//function currentTranslateValue(data){
//  var mm = data.css('transform');
//  var pozycja = mm[19]+mm[20]+mm[21];
//  var liczba = parseInt(pozycja);
//  return liczba;
//  
//
////  for (var i = 0;i<mm.length;i++){
////    console.log(mm[i]);
////    
////  }
//  var pozycja = mm[19]+mm[20]+mm[21];
//  var liczba = parseInt(pozycja);
//}
//
//  var baza = $('.kwa');
//  var active2 = $('.ss3');
//  $('.kwa').click(function(){
//    var mainActive = $('.ss3');
//      
//    
//    //wyciągamy wartośc translate z this
//    var mm = $(this).css('transform');
////    console.log('baza '+mm);
//    var pozycja = mm[19]+mm[20]+mm[21];
//    var liczba = parseInt(pozycja);
////    console.log(liczba);
//    
//    var mm2 = 300;
////    var mm2 = mainActive.css('transform');
//////    console.log('baza '+mm);
////    var pozycja2 = mm[19]+mm[20]+mm[21];
////    var liczba2 = parseInt(pozycja);
//    //dodajemy klase do this
//    if (active2.hasClass('big')){
//      active2.removeClass('big');
//    }
//    
//      active2 = $(this).addClass('big');
//      active2.css('transform','translateX('+liczba2+')');
//    
//    console.log('klikniety ' + active2)
//    //stary element dodstje translate z this
//    mainActive.css('transform','translateX('+liczba+'px)');
//    console.log('stary klikniety' + mainActive)
//        
//  });
//
//  baza.dblclick(function(){
//    $(this).removeClass('big');
//  });


//$('#woda').click(function(){
//  
//  $(this).css('border','2px solid red');
//  var mm = $(this).css('transform');
//  console.log('transs ' + mm);
//  var pozycja = mm[19]+mm[20]+mm[21];
//  var liczba = parseInt(pozycja);
//  $('#matrix').html("dddd"+ liczba);
//
//});


//var xxx = getTranslateXValue(trans);
//console.log(xxx);
//
//var cc = mm.split(',');
//console.log(cc);


//------------wipeEffect-------------------


$('#mainWipe').mousemove(function(e){
  $val = e.clientX-400;
//  console.log($val);
  if($val<1185 && $val>=590){
    $('#separator').css('left',$val-590);
    $('#framee').css('width',$val-590);
  }
});

//------------------------------magnifier----------------------

var photo = document.querySelector('.photo'),
    mag = null,
    zoom = null;

var createMagnifier = function () {
  var magEl = document.createElement('div');
  magEl.classList.add('magnifier');
  mag = magEl;
  photo.appendChild(magEl);
};

var removeMagnifier = function () {
  if (mag) {
    photo.removeChild(mag);
    mag = null;
  }
};

var createZoomedPhoto = function () {
  zoom = document.createElement('div');
  zoom.classList.add('zoom');
  document.body.appendChild(zoom);
};

var removeZoomedPhoto = function () {
  if (zoom) {
    document.body.removeChild(zoom);
    zoom = null;
  }
};

var onMouseMove = function (ev) {
  var photoBounding = photo.getBoundingClientRect(),
      x = ev.clientX - photoBounding.left,
      y = ev.clientY - photoBounding.top,
      photoSize = parseInt(window.getComputedStyle(photo).height),
      magSize = parseInt(window.getComputedStyle(mag).height),
      MAX_POSITION = photoSize - magSize;
  
  x -= magSize / 2;
  y -= magSize / 2;
  
  if (x + magSize > photoSize) {
    x = MAX_POSITION;
  }
  
  if (y + magSize > photoSize) {
    y = MAX_POSITION;
  }
  
  if (x < 0) {
    x = 0;
  }
  
  if (y < 0) {
    y = 0;
  }
  
  var transformCSSValues = "translateX(" + x + "px) translateY(" + y +"px)";
  mag.style.transform = transformCSSValues;
  
  zoom.style.backgroundPosition = - x * 2 +"px " + - y * 2 + "px";
};

var onMouseEnter = function () {
  createMagnifier();
  createZoomedPhoto();
};

var onMouseLeave = function () {
  removeMagnifier();
  removeZoomedPhoto();
};

photo.addEventListener('mouseenter', onMouseEnter);
photo.addEventListener('mouseleave', onMouseLeave);
photo.addEventListener('mousemove', onMouseMove);