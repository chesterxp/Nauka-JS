var nowyE = "";
nowyE = '<div class="articeCard">';
nowyE += '<img src="/images/foto1.jpg" alt="">';
nowyE += '<h3>Morskie Oko</h3>';
nowyE += '  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis asperiores distinctio velit corrupti ullam nulla consectetur, voluptates est adipisci inventore eveniet repellendus vel ea eum blanditiis eligendi culpa dolores aliquid?</p>';
nowyE += '</div>';

var box = $('.box');

//for (var i=0;i<120;i++){
//  box.append(nowyE);
//}

var data = '{"characters":[{"name":"Jim","level":"15","clan":"FX","animal":"true","class":"knight"},{"name":"Tom","level":"25","clan":"CONV","animal":"true","class":"nuk"},{"name":"James","level":"35","clan":"FX","animal":"true","class":"tank"},{"name":"As","level":"5","clan":"FX","animal":"true","class":"knight"},{"name":"Rambo","level":"35","clan":"CONV","animal":"true","class":"nuk"}]}';

var l2 = JSON.parse(data);
for (var i=0;i<l2.characters.length;i++){
  var card = '<div class="playCard">';
  card +='<div class="name">'+l2.characters[i].name+'</div>';
  card +='<div class="lvl">'+l2.characters[i].level+'</div>';
  card +='<div class="clan">'+l2.characters[i].clan+'</div>';
  card +='<div class="animal">'+l2.characters[i].animal+'</div>';
  card +='<div class="char">'+l2.characters[i].class+'</div>';
  card +='</div>';
box.append(card);
}






















const inventors = [
      { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
      { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
      { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
      { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
      { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
      { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
      { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
//      { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
//      { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//      { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//      { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//      { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
    ];

    const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];
    
    //https://javascript30.com/account/access/58d5564dbad3b321c1519b5e/view/99f049bb27
    var arrayJSON = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
//    var len = inventors.length;
//    for (var i=0;i<len;i++){
//      var val = inventors[i].year;
//      if( val> 1500 && val <1599){
//        console.log(val);
//      }
//    }
    
//    const fifteen = inventors.filter(investor => {
//      if(investor.year >= 1500 && investor.year <1600){
//        return true;
//      }
//    });
//    console.table(fifteen);
    
      //const fifteen = inventors.filter(investor => (investor.year >= 1500 && investor.year <1600));
    //console.table(fifteen);
    
//    console.log(inventors[0].year);
    
    //-----------------------------------------------------------------------------------------------------------
    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
//    const fullName = inventors.map(function(d) {
//      return d.first +' '+ d.last;
//    });
//    console.log(fullName);
    
//    var nameArray = [];
//    for (var i = 0;i<len;i++){
//      var x = inventors[i].first + " " + inventors[i].last;
//      nameArray.push(x);
//    }
//    console.log(nameArray);
    
    
    
    
    //-----------------------------------------------------------------------------------------------------------
    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
//    var tablicaSort = [];
//    for (var i = 0;i<len;i++){
//      tablicaSort.push(inventors[i].year);
//    }
//    var newA = tablicaSort.sort(function(a,b){
//      return b-a;
//    });
//    console.log(newA);
    
//      const ordered = inventors.sort(function(a,b){
//      if(a.year<b.year) {
//        return 1;
//      }else{
//        return -1;  
//      }
//        
//      });
      //console.table(ordered);
    
//      const ordered2 = inventors.sort((a,b) => a.year<b.year ? 1 : -1);
      //console.table (ordered2);
    
    //-----------------------------------------------------------------------------------------------------------
    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
//    var totalYears = 0;
//    for (var i=0;i<len;i++){
//      var age = inventors[i].passed - inventors[i].year;
//      totalYears+=age;
//    }
//    console.log(totalYears);
    //-------------------
//    var total = 0;
//    const totalYears = inventors.reduce((total,inventor) => {
//      return total + (inventor.passed-inventor.year);
//    },0);
//    
//    console.log(totalYears);
  
    //-----------------------------------------------------------------------------------------------------------
    // 5. Sort the inventors by years lived
    //sortowanie wewnątrz obiektów w tabeli
//    const oldest = inventors.sort(function(a,b){
//      const lastGuy = a.passed - a.year;
//      const nextGuy = b.passed - b.year;
//      return lastGuy > nextGuy ? -1 : 1; 
//    });
//      console.table(oldest);
    
    
    
    //-----------------------------------------------------------------------------------------------------------
    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    //https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
    
    //    const category = document.querySelector('.mw-category');
    //    const links = Array.from(category.querySelectorAll('a'));
    //    const de = links
    //                    .map(link => link.textContent)
    //                    .filter(streetName => streetName.includes('de'));
    

    //-----------------------------------------------------------------------------------------------------------
    // 7. sort Exercise
    // Sort the people alphabetically by last name
    
//    const alpha = people.sort(function(lastOne, nextOne){
//      const [aLast,aFirst] = lastOne.split(', ');
//      const [bLast,bFirst] = nextOne.split(', ');
//      //return aLast > bLast ? 1 : -1;
//      console.table(nextOne);
//      
//    });
    
//      const alpha = people.sort(function(lastOne, nextOne){
//          const parts = lastOne.split(', ');
      //return aLast > bLast ? 1 : -1;
      //console.log(parts);
      
//    });
    
//    var people2 = ['lukasz michal zaw pierwszy', 'aneta weronika zaw','daria monika zaw','tomek rysiek dom'];
//    
//    const nowa2 = people2.sort(function(a){
//      //const cos = b.split(' ');
//      //console.log(cos);
//      //przypisanie zmiennych do podzielonego textu
//      const [a2, b2, c2, d2] = a.split(' ');
//      console.log(a2,b2,c2,d2);
//    });
    
    
    
    //-----------------------------------------------------------------------------------------------------------
    // 8. Reduce Exercise
    // Sum up the instances of each of these
//    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
//    
//    const transport = data.reduce(function(obj, item){
//      if(!obj[item]){
//        obj[item] = 0;
//      }
//      obj[item]++;
//      return obj;
//    },{});
//    
//    console.log(transport);
    var text2 = '{"name":["Jan","Kowalski"],"email":"jan@Kowalski.pl","settings":{"sound":"off","fullScreen":true,"newsDisplayed":5},"Characters":[{"name":"Conen","level":10,"items":["topor"],"hungry":true},{"name":"Druzzt","level":4,"items":["sejmitar","sejmitar"],"hungry":true},{"name":"Garelt","level":10,"items":["miecz","miecz"],"hungry":true}]}';
    //console.log(text2);
    var obj2 = JSON.parse(text2);
    //console.log(obj2);
    var msg = "<p>Użytkownik " + obj2.name + '</br>';
    msg += "Adres email " + obj2.email + '</br>';
    msg += soundON();
    msg += "<p>Posiada " + obj2.Characters.length + " postacie</p>";
    msg += showHeros()+'</p>';
    msg += "<p>koniec</p>"; 
    function soundON(){
      var settings = "";
      if (obj2.settings.sound === 'off'){
        settings += "<p> Nie lubi słuchac muzy" +'</br>';
      }
      else{
        settings += "Lubi słuchać muzy"+'</br>';
      };
      
      if(obj2.settings.fullScreen == true){
        settings += "Gra na fullScrrenie" +'</br>';
      }
      else{
        settings += "Nie lubi grać na fullScrrenie" +'</br>';
      };
      settings += "Wyświetla "+obj2.settings.newsDisplayed + ' newsów na jednej stronie</p>';
      return settings;
    };
    function areHungry(number){
      var hungry = '';
      if (obj2.Characters[number].hungry == true){
        hungry += "Czy jest głodny: TAK";
      }
      else{
        hungry += "<p>Czy jest głodny: NIE</p>";
      }
      return hungry;
    }
    function showHeros(){
      var heros ="";
      for (var i=0;i<3;i++){
        heros += '<p>' + obj2.Characters[i].name + '<br/>';
        heros += "LvL: " + obj2.Characters[i].level + '<br>';
        heros += "Posiadane bronie: " + obj2.Characters[i].items + '<br>';
        heros += areHungry(i) + '</p>';
      }
      return heros;
    }
  //console.log(obj2.Characters[1].hungry);  
    
    //showMe.innerHTML = msg;
    
//    var text = '{"employees":[' +
//      '{"firstName":"John","lastName":"Doe" },' +
//      '{"firstName":"Anna","lastName":"Smith" },' +
//      '{"firstName":"Peter","lastName":"Jones" }]}';
//    console.log(text);
//    var obj = JSON.parse(text);
//    
//    console.log(obj);
//    var showMe = document.querySelector('#showMe');
//    
//    
//    var imie = obj.employees[2].firstName + " "+ obj.employees[2].lastName;
//    var wellcome = '<h1> Witamy na naszej stronie </h1>'; 
//    wellcome += '<h2> '+ imie+' </h2>'; 
//    showMe.innerHTML = wellcome;
