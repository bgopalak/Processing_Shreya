var xLocation, yLocation;
var openClose;
var nextBall;
var ballColor;
var Points;
var step;
var pacmanspeed;
function setup() {
  step = 1;
  createCanvas(600, 600);
  xLocation =0;
  yLocation =0;
  bx= random(0,600);
  by= 600;
  nextBall =1;
  openClose =4;
  ballColor = color(255);
  Points =0;
  pacmanspeed =1;
}

function draw() {
  
  noStroke();
  //background(103);
  fill(0,0,0,30);
  rect(0,0,600,600);
  textSize(32);
  fill(0, 102, 153);
  text ("R - for Reset",300,50);
  
  if(keyIsDown(RIGHT_ARROW)){
    xLocation = xLocation + pacmanspeed;  
  }
  if(keyIsDown(LEFT_ARROW)){
    xLocation = xLocation - pacmanspeed;
  }
  
  if(keyIsDown(UP_ARROW)){
    yLocation = yLocation - pacmanspeed;
  }
  if(keyIsDown(DOWN_ARROW)){
    yLocation = yLocation + pacmanspeed;    
  }

  //PACwoman
  noStroke();
  fill(255,255,0,255);
  ellipse(xLocation,yLocation,50,50);  
  //Mouth
  fill(0,0,0,255);
  arc(xLocation,yLocation,50,50,0,openClose/10);
  //Eye
  fill(0,0,0);
  ellipse(xLocation + 5,yLocation - 10,10,10);
  
  //Bow
  fill(255,255,255);
  triangle(xLocation, yLocation - 25, xLocation + 10, yLocation - 45, xLocation + 7, yLocation -30);
  
  // Random balls being thrown from below
  fill(ballColor);
  ellipse(bx,by,20,20);
  by = by-step;
  
  if(by <= 0) {
     bx= random(100,500);
     by=600;
     step = random(0.5, 2);
     ballColor = color(random(0,255),random(0,255),random(0,255));
    }
    text("Points : " +Points , 100,100);
    if(xLocation >= bx-20 && xLocation <=bx+20 && yLocation >= by-20 && yLocation <= by +20) {
     Points = Points +1; 
     
     by=0;
    }
  openClose = openClose - 0.25;
  if(openClose == 0) {
      openClose =4;
  }
}

// Parametric FunctionS
function fX(x) {
  return 20*sin(x);
}
function fY(x) {
  return 20*cos(x);
}

function keyPressed() {
  if(key == 'R' || key =='r')
  setup();
}