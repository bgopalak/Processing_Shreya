var yLocation=0;
var xLocation=0;
//var a=400;
var d1,d2,d3,d4;
function setup() {
  createCanvas(windowWidth, windowHeight);
  d1=1;
  d2=1;
  d3=1;
  d4=1;
}

function draw() {
  background(100);
  //Code for Car Movement
  if(keyIsDown(RIGHT_ARROW)){  
    xLocation=xLocation+2
  }
  if(keyIsDown(LEFT_ARROW)){  
    xLocation=xLocation-2
  }
  if(keyIsDown(DOWN_ARROW)){  
    yLocation=yLocation+2
  }  
  if(keyIsDown(UP_ARROW)){  
    yLocation=yLocation-2
  }
  print(xLocation);
  print(yLocation);
  if(xLocation+100>=400 && xLocation <=450 && yLocation+30 >=130 && yLocation+30 <=160)
  {
    d1=0;
  }
   if(xLocation+100>=600 && xLocation+100<=625 && yLocation+30>=110 && yLocation+30<=170){  
    d2=0;
  }
  
  if(xLocation+100>=100 && xLocation+100<=125 && yLocation+30>=140 && yLocation+30<=170){  
    d3=0;
  }
  
  if(xLocation+100>=800 && xLocation+100<=825 && yLocation+30>=440 && yLocation+30<=460){  
    d4=0;
  }
  //Code for dot removal
  /*
  if(xLocation>390&&xLocation<410&&yLocation>130&&yLocation<150);{
  }  
  if(xLocation>490&&xLocation<510&&yLocation>130&&yLocation<150);{
  }  
  if(xLocation>90&&xLocation<410&&yLocation>130&&yLocation<150);{
  }  
  if(xLocation>790&&xLocation<810&&yLocation>430&&yLocation<450);{
  }
  */
  //Code for Dots
  // first Green Dot
  fill(0,250,0);
  if(d1==1){
    ellipse(400,140,40,40);
  }
  // second Blue Dot
  fill(0,0,250);
  if(d2 ==1) {
  ellipse(600,140,40,40);
  }
  
  // Third Red Dot
  fill(250,0,0);
  if(d3 ==1) {
  ellipse(100,140,40,40);
  }
  
  // Dot no. 4 Pink
    fill(250,0,250);
  if(d4 == 1) {
  ellipse(800,440,40,40);
  }
  //Code For Car
  fill(0,0,125);
  rect(xLocation,yLocation,100,30);
  noStroke();
  ellipse(xLocation+50,yLocation,70,20);
  fill(0,0,0);
  ellipse(xLocation+20,yLocation+30,20,20)
  ellipse(xLocation+80,yLocation+30,20,20)
}