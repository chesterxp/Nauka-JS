//var data = '{"characters":'+
//    '[{"name":"Jim","level":15,"class":"Knight","photo": "https://s-media-cache-ak0.pinimg.com/736x/aa/ba/e0/aabae0270c9635881205c87f3be59fc1.jpg"},'+
//    '{"name":"Jim2","level":125,"class":"Knight","photo": "https://vignette2.wikia.nocookie.net/fireemblem/images/4/43/Fepr-Blackknight.jpg/revision/latest?cb=20090605012600"},'+
//    '{"name":"Jim2","level":125,"class":"Knight","photo": "https://i.ytimg.com/vi/98hRtOJqOYE/maxresdefault.jpg"},'+
//    '{"name":"Jim2","level":25,"class":"Knight","photo": "https://s-media-cache-ak0.pinimg.com/736x/aa/ba/e0/aabae0270c9635881205c87f3be59fc1.jpg"},'+
//    '{"name":"Jim2","level":75,"class":"Knight","photo": "https://i.ytimg.com/vi/98hRtOJqOYE/maxresdefault.jpg"},'+
//    '{"name":"Jim2","level":125,"class":"Knight","photo": "https://s-media-cache-ak0.pinimg.com/736x/aa/ba/e0/aabae0270c9635881205c87f3be59fc1.jpg"},'+
//    '{"name":"Jim2","level":5,"class":"Knight","photo": "https://i.ytimg.com/vi/98hRtOJqOYE/maxresdefault.jpg"},'+
//    '{"name":"Jim2","level":12,"class":"Knight","photo": "https://s-media-cache-ak0.pinimg.com/736x/aa/ba/e0/aabae0270c9635881205c87f3be59fc1.jpg"},'+
//    '{"name":"Jim2","level":15,"class":"Knight","photo": "https://vignette2.wikia.nocookie.net/fireemblem/images/4/43/Fepr-Blackknight.jpg/revision/latest?cb=20090605012600"}'+
//    ']}';
//var game = JSON.parse(data);

var pogoda = {
  "latitude": 47.20296790272209,
  "longitude": -123.41670367098749,
  "timezone": "America/Los_Angeles",
  "currently": {
    "time": 1453402675,
    "summary": "Rain",
    "icon": "rain",
    "nearestStormDistance": 0,
    "precipIntensity": 0.1685,
    "precipIntensityError": 0.0067,
    "precipProbability": 1,
    "precipType": "rain",
    "temperature": 48.71,
    "apparentTemperature": 46.93,
    "dewPoint": 47.7,
    "humidity": 0.96,
    "windSpeed": 4.64,
    "windBearing": 186,
    "visibility": 4.3,
    "cloudCover": 0.73,
    "pressure": 1009.7,
    "ozone": 328.35
  }};
  
  console.log(pogoda.latitude);

var box = $('.box');

var game;
function showCards(){
        var showCardsLength = game.characters.length;
        for (var i =0; i<showCardsLength;i++){
          console.log(i);
          var ele = '<div class="gameCard">';
          ele += '  <img src='+ game.characters[i].photo+ ' alt="">';
          ele += '<div class="name">'+ game.characters[i].name+ '</div>';
          ele += '<div class="lvl">'+ game.characters[i].level+ '</div>';
          ele += '<div class="char">'+ game.characters[i].class+ '</div>';
          ele += '</div>';
          box.append(ele);
      }
        
}
$('#klik').click(function(){
  $.ajax({
    url:'dane/pogoda.txt',
    success: function(s){
      //game = JSON.parse(s);
      //showCards();
      
      //console.log(typeof s);
      console.log(s);
      var args = Array.from(arguments);
      console.log(args);
      
    },
    error:function(e){
      alert('blad');
    }
  });
});

var baza2 = [
  {name:'lukasz',
   class:'knight',
   lvl:32,
   photo:'https://i.ytimg.com/vi/98hRtOJqOYE/maxresdefault.jpg'
  },
  {name:'michal',
   class:'nuker',
   lvl:22,
   photo:'https://i.ytimg.com/vi/98hRtOJqOYE/maxresdefault.jpg'
  },
  {name:'ania',
   class:'healer',
   lvl:33,
   photo:'https://i.ytimg.com/vi/98hRtOJqOYE/maxresdefault.jpg'
  },
]
for (var i=0;i<baza2.length;i++){
      var ele2 = '<div class="gameCard">';
    ele2 += '  <img src='+ baza2[i].photo+ ' alt="">';
    ele2 += '<div class="name">'+ baza2[i].name+ '</div>';
    ele2 += '<div class="lvl">'+ baza2[i].lvl+ '</div>';
    ele2 += '<div class="char"><a href="https://i.ytimg.com/vi/98hRtOJqOYE/maxresdefault.jpg">'+ baza2[i].class+ '</a></div>';
    ele2 += '</div>';
    //box.append(ele2);
}

var miasta=33;

$('#klik2').click(function(){
    $.ajax({
      url:'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
      success:function(s){
        miasta = JSON.parse(s);
        pokazMiasto();
      },
    error:function(e){
      alert('blad');
    }
      
    });
  });

//$('#klik3').click(function(){
//  console.log(miasta);
//})
var ilosc;
var box2 = $('.box2');
function pokazMiasto(){
  box2.empty();
  ilosc = Number($('#ilosc').val());
  var numberOfCity = miasta.length;
  for (var i=0;i<100;i++){
  var city = '';
    if (miasta[i].population > ilosc){
      
    city += '<div class="city">'+
  '<div class="nameCity">'+
    '<div class="title">Name</div>'+
    '<div class="value">'+miasta[i].city+'</div>'+
  '</div>'+
  '<div class="populationCity">'+
    '<div class="title">Population</div>'+
    '<div class="value">'+miasta[i].population+'</div>'+
  '</div>'+
'</div>';
  
  box2.append(city);
    }

  };
  var sortujMiasta = miasta.sort(function(a,b){
  if (a.population > b.population){
    return 1;
  }
  else{
    return -1;
  }
    
});
  //console.table(sortujMiasta);
};




///---------------------------cwiczenia------------------------------


    // Get your shorts on - this is an array workout!
    // ## Array Cardio Day 1

    // Some data we can work with

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

    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    var len = inventors.length;
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
    
      const alpha = people.sort(function(lastOne, nextOne){
          const parts = lastOne.split(', ');
      //return aLast > bLast ? 1 : -1;
      //console.log(parts);
      
    });
    
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
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];
    
    const transport = data.reduce(function(obj, item){
      if(!obj[item]){
        obj[item] = 0;
      }
      obj[item]++;
      return obj;
    },{});
    
    console.log(transport);
