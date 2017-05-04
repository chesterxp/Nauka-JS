var x =1;
var y = 1;

$('#speed1').click(function(){
  y = 2;
});
$('#speed2').click(function(){
  y = 5;
});
$('#speed3').click(function(){
  y = 10;
});
$('#speed4').click(function(){
  y = 20;
});
$('#speed5').click(function(){
  y = 50;
});

var $widthAuto = $('#auto').width();
draw = function(){
  
size($widthAuto,150);
background(#b5ed59)
noStroke();
fill(#e30303);
rect(x+10, 60, 80, 20);
rect(x-10, 70, 120, 20);

fill(#151515);
ellipse(x+10, 90, 20, 20);
ellipse(x+90, 90, 20, 20);


stroke(#2a2a2a);
strokeWeight(10);
line(-3,100,$widthAuto,100);

  
  
if(x<$widthAuto+50){
  x=x+y;
}
  else{
    x=-200;
  }
};

stroke(#151515);
strokeWeight(5);
line(10,230,300,230);

