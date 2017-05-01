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
}

var stopStopera = function () {
  clearTimeout(timee);
};
var start = document.getElementById('startButton');
start.addEventListener('click', odliczanieStopera);
var stop = document.getElementById('stopButton');
stop.addEventListener('click', stopStopera);


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
	var miesiac = dzisiaj.getMonth() + 1;
	if (miesiac < 10) miesiac = "0" + miesiac;
	var rok = dzisiaj.getFullYear();

	var godzina = dzisiaj.getHours();
	if (godzina < 10) godzina = "0" + godzina;
	var minuta = dzisiaj.getMinutes();
	if (minuta < 10) minuta = "0" + minuta;
	var sekunda = dzisiaj.getSeconds();
	if (sekunda < 10) sekunda = "0" + sekunda;
	document.getElementById('timer').innerHTML = dzien + " " + miesiac + " " + rok + "  - " + godzina + ":" + minuta + ":" + sekunda;

	setTimeout("odliczanie()", 1000);
}
///----------------FAQ---------------------

  $('.faq .answer').hide();
  
  $('.faq h2').click(function(){
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
  var liczba = Math.floor(Math.random()*11);
  randomNumber.textContent = 'Twoja szczęśliwa liczba to: \n'+  liczba;
};