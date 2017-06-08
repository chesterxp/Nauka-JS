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
    url:'dane/dane.txt',
    success: function(s){
      game = JSON.parse(s);
      showCards();
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



