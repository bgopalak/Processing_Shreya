//Project by Shreya Balaji

var xLocation = 20;
var yLocation = 20;
var bX,bY;
var ballColor;
var pacmanColor;
var step;
var pointScored;
var pointMissed;
var levelNow;
var ballSpeed;

function setup() {
  step = 2;
  createCanvas(810, 600); 
  bX = 300;
  bY = 600;
  ballColor = color(0,0,255);
  pacmanColor = color(255,255,0,100);
  pointScored = 0;
  pointMissed = 0;
  levelNow = 1;
  ballSpeed = 1;
    
}

function draw() {
  noStroke();
  fill(0,0,0,30);
  rect(0,0,810,600);
  
//Rules of the Game  
  textSize(12);
  fill(255,255,255);
  text("1. Use the arrows to move!",600,40);
  text("2. Capture 5 to move to the next level!",600,60);
  text("3. Miss 3 and go down a level!",600,80);
  text("4. 'r' or 'R' can be used to reset game!",600,100);
  
//Points Scored and Points Missed + Level Display
  
  textSize(20);
  fill(255,255,255);
  text("POINTS SCORED : " + pointScored,600,300);
  text("POINTS MISSED : " + pointMissed,600,350);
  
  textSize(30);
  text("LEVEL : " + levelNow, 600,200);
  
//Arrow-based movements

  if(keyIsDown(RIGHT_ARROW)){
    xLocation = xLocation + step;  
  }
  if(keyIsDown(LEFT_ARROW)){
    xLocation = xLocation - step;
  }  
  if(keyIsDown(UP_ARROW)){
    yLocation = yLocation - step;
  }
  if(keyIsDown(DOWN_ARROW)){
    yLocation = yLocation + step;
  }
  
  if(yLocation >= 600) {
  yLocation = 0;  
  }
  if (yLocation < 0) {
  yLocation = 600;
  }
  if(xLocation >=600) {
  xLocation = 0;  
  }  
  if (xLocation <0){
  xLocation = 600;  
  }
  
  
// Moving Object Design goes here
  noStroke();
  fill(pacmanColor);
  ellipse(xLocation,yLocation,50,50);  
  fill(0,0,0);
  arc(xLocation,yLocation,50,50,0,QUARTER_PI);
  fill(0,0,0);
  ellipse(xLocation + 5,yLocation - 10,10,10);
  
// Random ball moving from bottom to top
  fill(ballColor);
  ellipse(bX,bY,15,15);

  bY = bY - ballSpeed * levelNow;
  
  if(bY<=0 && bY >= -10){
  pointMissed =pointMissed +1 ;
  }
  
  if(bY <= 0){
    bY = 600;
    bX = random(50,550);
    ballColor = color(random(0,255),random(0,255),random(0,255));
  }
  
  //Remove ball from screen if Pacman and ball meet & adjust points
  if(xLocation >= bX - 15 && xLocation <= bX + 15 && yLocation >= bY - 15 && yLocation <= bY + 15){
    bY = -100;
    pointScored = pointScored + 1;
    pacmanColor = ballColor;
  }
  
  //If level 5 is reached & 5 balls are captured game is over
  if(levelNow == 5 && pointScored == 5){
    textSize(50);
    fill(255,255,0);
    text("YOU ARE A WINNER!",100,250);
    text("GAME OVER",100,350);
    exit();
  }
  
  //Moving up a level when 5 balls are captured
  if(pointScored == 5){
    levelNow = levelNow + 1;
    pointScored = 0;
    pointMissed = 0;
  }
  
  //Moving down a level when 3 balls are missed
  if(pointMissed == 3){
    levelNow = levelNow - 1;
    pointScored = 0;
    pointMissed = 0;
  }
  
  if(levelNow  <= 0){
    levelNow = 1;
  }
}

function keyPressed() {
  if(key == 'w' || key == 'W') {
        yLocation = yLocation - 5;
      }
  if(key == 's' || key == 'S') {
        yLocation = yLocation + 5;
      }
  if(key == 'd' || key == 'D') {
        xLocation = xLocation + 5;
      }
  if(key == 'a' || key == 'A') {
        yLocation = yLocation - 5;
      }
  if(key == 'r' || key == 'R') {
        setup();
      }
}