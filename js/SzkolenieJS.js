$(document).ready(function(){
    $('#pole1').click(function(){
    $('.flexy1').fadeIn(100);
    $('.flexy2').fadeOut(100);
  });
  
   $('#pole2').click(function(){
    $('.flexy2').fadeIn(100);
    $('.flexy1').fadeOut(100);
  });
  
  $('#all').click(function(){
    $('.flexy').fadeIn(100);
  });
});

//--------------------Stoper --------------------------//
var czas = 0
var timee = 0;
var klik =0;
var startKlik =0;
var odliczanieStopera = function () {
  var sekunda = document.getElementById('seconds');
  var opis = "";
  czas = czas + 1;
  if (czas == 1) {
    opis = " sekunda";
  }
  else if (czas < 5) {
    opis = " sekundy";
  }
  else {
    opis = " sekund";
  }
  sekunda.innerHTML = czas + opis;
  timee = setTimeout("odliczanieStopera()", 1000);
//  start.removeEventListener('click', odliczanieStopera);
  
}

var stopStopera = function () {
  clearTimeout(timee);
};

function resetStoper (){
//  var czas = 0
  var timee = 0;
  odliczanieStopera();
  
};
var start = document.getElementById('startButton');
start.addEventListener('click', function(){
  startKlik+=1;
  if(startKlik==1){
    odliczanieStopera();
  }
});

var stop = document.getElementById('stopButton');
stop.addEventListener('click', function(){
  klik=0;
  stopStopera();
});

var resume = document.getElementById('resumeButton');
//resume.addEventListener('click', resetStoper);
resume.addEventListener('click', function(){
  klik+=1;
  if(klik==1){
    odliczanieStopera();
  }
});

var reset = document.getElementById('resetButton');
reset.addEventListener('click',function(e){
  czas = 0;
  stopStopera();
  var sekunda = document.getElementById('seconds');
  sekunda.textContent = '0 sekund';
  startKlik = 0;
})


//------------------------Audio---------------------------//

var mp3 = document.getElementById('mp3');

var audioOn = function(e){
  e.preventDefault();
  var aduioEl = document.createElement("audio");
  aduioEl.src = "https://www.kasandbox.org/programming-sounds/rpg/giant-no.mp3";
  aduioEl.autoplay = "true";
  document.body.appendChild(aduioEl);
}
mp3.addEventListener('click',audioOn);


///------------------zegar------------//

function odliczanie() {
	var dzisiaj = new Date();

	var dzien = dzisiaj.getDate();
     if (dzien < 10) dzien = "0" + dzien;
	var miesiac = dzisiaj.getMonth() + 1;
	if (miesiac < 10) miesiac = "0" + miesiac;
	var rok = dzisiaj.getFullYear();

	var godzina = dzisiaj.getHours();
	if (godzina < 10) godzina = "0" + godzina;
	var minuta = dzisiaj.getMinutes();
	if (minuta < 10) minuta = "0" + minuta;
	var sekunda = dzisiaj.getSeconds();
	if (sekunda < 10) sekunda = "0" + sekunda;
    var timer = dzien + " " + miesiac + " " + rok + "  - " + godzina + ":" + minuta + ":" + sekunda;
	document.getElementById('timer').innerHTML = timer;
	document.getElementById('timer2').innerHTML = godzina + ":" + minuta + ":" + sekunda;

	setTimeout("odliczanie()", 1000);
}

  odliczanie();


///----------------FAQ---------------------

  $('#faq .answer').hide();
  
  $('#faq h2').click(function(){
    var $answer = $(this).next('.answer');
    if ($answer.is(':hidden')){
      $answer.slideDown();
      $(this).addClass('close');
    }
    else{
      $answer.slideUp();
      $(this).removeClass('close');
    }
  });


//------kalkulator

function pokaz(dzial) {
  var liczba1 = document.getElementById('liczba1').value;
  liczba1 = Number(liczba1);
  var liczba2 = document.getElementById('liczba2').value;
  liczba2 = Number(liczba2);
  var wynik = 0;
  var operator = "";
  if (dzial == "suma") {
    operator = "+";
  }
  else if (dzial == 'odej') {
    operator = '-';
  }
  else if (dzial == 'mnoz') {
    operator = '*';
  }
  else if (dzial == 'dziel') {
    operator = '/';
  };
  wynik = eval(liczba1 + operator + liczba2);
  console.log(wynik);
  console.log(NaN);
  if (isNaN(wynik)){
    wynik = "Nie zostały wprowadzone liczy. Spróbuj jeszcze raz.";
  }
  else{
    
  }
  document.getElementById('pokaz3').innerHTML = wynik;
}

//----------------------zakręć --------------------------

  $('#randomButton').click(function(){
    $('.circle').toggleClass('change');
//    $('#randomNumber').html('nowy tekst');
  });



var randomButtom = document.getElementById('randomButton');
var randomNumber = document.getElementById('randomNumber');
randomButtom.addEventListener("click",losowanieLiczby);

function losowanieLiczby(){
  var liczba = Math.floor(Math.random()*10)+1;
  randomNumber.textContent = 'Twoja szczęśliwa liczba to: \n'+  liczba;
};


//----------------activeForm-----

var nameInput = document.getElementById('nameInput');
var ageInput = document.getElementById('ageInput');
var cityInput = document.getElementById('cityInput');
var courseInput = document.getElementById('courseInput');

var textName = document.getElementById('textName');
var textAge = document.getElementById('textAge');
var textCity = document.getElementById('textCity');
var textOffer = document.getElementById('textOffer');

nameInput.addEventListener('keyup',function(){
  textName.textContent = nameInput.value;
});

ageInput.addEventListener('keyup',function(){
  textAge.textContent = ageInput.value;
});

cityInput.addEventListener('keyup',function(){
  textCity.textContent = cityInput.value;
});

textOffer.textContent = courseInput.value;

courseInput.addEventListener('change',function(){
  textOffer.textContent = courseInput.value;
});

//----------------------Gallery--------------------------

//pokazanie zdjęć i podpisów

$('.box img').click(function(){
  var http = $(this).attr('src');
  var title = $(this).attr('alt');
  $('#showPicture img').attr('src',http);
  $('#title').text(title);
});

//pokazanie samego opisu obrazka

$('.box img')
  .mouseover(function(){
  var title = $(this).attr('alt');
  $('#title2').text(title);
  $('#title2').show();
})
  .mouseout(function(){
  $('#title2').hide();
})
  .mousemove(function(e){
  $('#title2').css('left', e.pageX+10);
  $('#title2').css('top', e.pageY+10);
});


$('.polee').mouseover(function(){
  $(this).css('background',$('#testy p').css('color'));
}).mouseout(function(){
  $(this).css('background','green');
})



//-------------movieReview--------------------
  $('.review').hide();
  $('#review1').show();
  $('#link1').click(function () {
    $('.review').hide();
    $('#review1').show();
  });
  $('#link2').click(function () {
    $('.review').hide();
    $('#review2').show();
  });
  $('#link3').click(function () {
    $('.review').hide();
    $('#review3').show();
  });
  $('#link4').click(function () {
    $('.review').hide();
    $('#review4').show();
  });


//----------------------------modalForm---------------------------

$('#contactBtn').click(function(){
  $('.modal').css('opacity',1);
  $('.boxModal').addClass('overlay');
 
});

$('#close').click(function(){
  $('.boxModal').removeClass('overlay');
  $('.modal').css('opacity',0);
})

document.addEventListener('keyup',function(e){
  if(e.keyCode==27){
    $('.boxModal').removeClass('overlay');
    $('.modal').css('opacity',0);
  };
})

//-------------------------keyPress----------------

//var letter = document.getElementById('');

document.addEventListener('keyup',function(e){
  var letter2 = e.key;
  var letter = e.keyCode;
  var x = String.fromCharCode(letter);
  var letterBox = document.getElementById('key');
  letterBox.textContent = letter2;
})



//-------------analogClock------------------


var secondsHand = document.querySelector('.seconds');
var minutesHand = document.querySelector('.minutes');
var hoursHand = document.querySelector('.hours');
now = new Date();

var setupClock = function(){
  var secs = now.getSeconds();
  var mins = now.getMinutes()*60;
  var hours = now.getHours()*3600;
  
  secondsHand.style.animationDelay = '-' + secs + "s" ;
  minutesHand.style.animationDelay = '-' + mins + 's';
  hoursHand.style.animationDelay = '-' + hours + 's';
}

setupClock();


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
$('#hamburgerButtonBox').click(function(){
  $('.burgerMenu').addClass('.showBurgerMenu');
});

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
});


//------------------------------stars------------

var countStars = function(){
  var checkedRadio = document.querySelector('.stars input:checked');
  var rate = document.getElementById('rate');
  rate.textContent = checkedRadio.value;
};

var stars = document.getElementById('stars');

stars.addEventListener('click',countStars);