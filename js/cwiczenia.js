$(document).ready(function(){
    $('#login').submit(function() {
    var formData = $(this).serialize();
    $.post('login.php',formData,processData);
    function processData(data) {
      if (data==='pass') {
         $('.main').html('<p>Logowanie zakończyło się powodzeniem!</p>').fadeOut(4000);
        
        $('#black').css('display','none');
//        $('#welcomeMessage').css('display','inline-block').fadeOut(10000);
        
      }
      else {
        if ($('#fail').length === 0) {
      	   $('#formWrapper').prepend('<p id="fail">Nieprawidłowe dane logowania. Spróbuj ponownie.</p>');
        }
      }
    }
    return false;  
  });
    $('#list a').click(function(e){
    var url = $(this).attr('href');
    console.log(url);
    $('.caption').load(url + ' #caption');
    e.preventDefault();
  });
});



function aktualnyCzas() {
    function dodajZero(i) {
        if(i<10){
          return "0"+i;
        }
        else{
          return i;
        }
    }
    var czas = new Date();
    var element = document.querySelector('#odpalCzas');
    var days = ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"];
    element.innerHTML = "Aktualna godzina to: ";
    element.innerHTML += dodajZero(czas.getHours())+":"+dodajZero(czas.getMinutes()) +":" + dodajZero(czas.getSeconds());
    element.innerHTML += "<br>Dzień: ";
    element.innerHTML += dodajZero(czas.getDate()) +"-"+dodajZero(czas.getMonth()+1)+"-"+dodajZero(czas.getFullYear()) +" "+days[(czas.getDay())];
    setInterval(aktualnyCzas,1000);
};

var odpalButton = document.getElementById('odpalButton');

odpalButton.addEventListener('click',aktualnyCzas);
