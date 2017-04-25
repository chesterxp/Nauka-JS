var $maxWidth = $('#auto').width();
var $middleWidth = $maxWidth/2;
$('#sun').click(function(){
  sunRadius = 200;
});

$('#sun2').click(function(){
  sunRadius = 100;
});
var sunRadius = 100;
var x = 0;
var y = $maxWidth;
size($maxWidth,350);
noStroke();

draw = function(){
  background(184, 236, 255);
    
    fill(255, 170, 0);
    ellipse($middleWidth, 200, sunRadius, sunRadius);
    
    // clouds 
    fill(255, 255, 255);
    // left cloud
    ellipse(x, 250, 126, 97);
    ellipse(x+62, 250, 70, 60);
    ellipse(x-62, 250, 70, 60);
  
    ellipse(y, 200, 126, 97);
    ellipse(y+62, 200, 70, 60);
    ellipse(y-62, 200, 70, 60);
    
  
  if(x<$maxWidth+100){
    x=x+2;
  }
  else{
    x=-100;
  }
  
  if(y>0){
    y=y-2;
  }
  else{
    y=$maxWidth+100;
  }
};

