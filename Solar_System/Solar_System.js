var angle1=0;
var mCx,mCy,vCx,vCy,eCx,eCy,mCx,mCy,jCx,jCy,sCx,sCy;

//Define Center
var ctrx=500;
var ctry=500;

var mCcolor,vCcolor,eCcolor,mCcolor,jCcolor,sCcolor;
var colorFlip,satelliteMoon;
var sunSize,earthSize;

//Satellite Variables
//Venus
var vSat1x,vSat2x,vSat1y,vSat2;

//Earth
var eSat1x,eSat1y

//Mars
var mSat1x,mSat1y,mSat2x,mSat2y

//Jupiter
var jSat1x,jSat1y,jSat2x,jSat2y

function setup() {
  createCanvas(1500, 1500);
  background(0,0,0,255);
  mCcolor =color(165,145,134);
  vCcolor = color(255,255,0);
  eCcolor = color(0,0,255);
  mCcolor= color(255,250,250);
  jCcolor= color(255,255,60);
  sCcolor =color(255,0,255);
  colorFlip =0;
  sunSize=100;
  earthSize = 10;
}

function draw() {
  background(0,0,0);
  //Sun and its Planets
   noStroke();
  
  //First the Sun  
  fill(255, 255, 0,255); 
  ellipse(ctrx,ctry,sunSize,sunSize);
  
  fill(250, 250, 40,255); 
  ellipse(ctrx,ctry,sunSize-20,sunSize-20);
  fill(240,240,0,100);
  ellipse(ctrx,ctry,sunSize-35,sunSize-35);
  fill(240,240,30,255);
  ellipse(ctrx,ctry,sunSize-50,sunSize-50);
  
//Mercury
  mCx = 60*cos(angle1*1.607);
  mCy = 60*sin(angle1*1.607);
  fill(mCcolor);
  ellipse(ctrx+mCx,ctry+mCy,3.8,3.8);
  

//Venus
  vCx = 80*cos(angle1*1.174);
  vCy = 80*sin(angle1*1.174);
  fill(vCcolor);
  ellipse(ctrx+vCx,ctry+vCy,9,9);

    
  
//Earth
  eCx = 120*cos(angle1);
  eCy = 90*sin(angle1);
  fill(eCcolor);
  ellipse(ctrx+eCx,ctry+eCy,10,10);
  
  eSat1x=7*cos(angle1*6);
  eSat1y=7*sin(angle1*6);
   fill(204,255,204);
  ellipse(ctrx+eCx+eSat1x,ctry+eCy+eSat1y,2,2);
  
  //Mars
  
  mCx = 160*cos(angle1*0.80);
  mCy = 160*sin(angle1*0.80);
  fill(mCcolor);
  ellipse(ctrx+mCx,ctry+mCy,6,6);
  
   // satellite of Mars - 2 of them
    mSat1x=9*cos(angle1*3);
    mSat1y=9*sin(angle1*3);
  fill(255,204,153);
    ellipse(ctrx+mCx+mSat1x,ctry+mCy+mSat1y,2,2);
 
    mSat2x=12*cos(angle1*2);
    mSat2y=12*sin(angle1*2);
    ellipse(ctrx+mCx+mSat2x,ctry+mCy+mSat2y,3,3);
  
  
  //Jupiter
  
  jCx = 250*cos(angle1/11);
  jCy = 250*sin(angle1/11);
  fill(jCcolor);
  ellipse(ctrx+jCx,ctry+jCy,25,25);
  ellipse(ctrx+jCx+30*sin(angle1),ctry+jCy+30*cos(angle1),5,5);
  fill(255,180,180);
  ellipse(ctrx+jCx+20*sin(2*angle1),ctry+jCy+20*cos(2*angle1),2,2);
   ellipse(ctrx+jCx+25*cos(2*angle1),ctry+jCy+25*sin(2*angle1),2,2);
   ellipse(ctrx+jCx+40*sin(angle1/2),ctry+jCy+40*cos(angle1/2),3,3);
  
  //Saturn
  
  sCx = 360*cos(angle1/29);
  sCy = 360*sin(angle1/29);
  fill(sCcolor);
  ellipse(ctrx+sCx,ctry+sCy,20,20);
  //stroke(1);
  ellipse(ctrx+sCx,ctry+sCy,30,5);  
  
  angle1 = angle1+0.01;
  
  //Comets
  //Experimental Coment
  //ellipse(1000*cos(angle1),1000*sin(angle1),10,20);
  fill(255,255,255);
  ellipse(800*cos(angle1/15),900*sin(angle1/15),3,3);
  ellipse(800*cos(angle1/24)+1,900*sin(angle1/24)+1,2,2);
  ellipse(100*sin(angle1/12),500*cos(angle1/12),3,3);
  ellipse(600*sin(angle1/10)+1,1000*cos(angle1/10)+1,2,2);
  
 ellipse(300*cos(angle1/25),300*sin(angle1/25),3,3);
  ellipse(350*sin(angle1/23)+1,500*cos(angle1/23)+1,2,2);
  
   ellipse(450*cos(angle1/14),540*sin(angle1/14),3,3);
  ellipse(540*sin(angle1/13)+1,640*cos(angle1/13)+1,2,2);
   ellipse(700*cos(angle1/12),800*sin(angle1/12),3,3);
  ellipse(1000*sin(angle1/10)+1,100*cos(angle1/10)+1,2,2);
  
}

function mouseClicked() {
  // prevent default
  if(colorFlip ==0){
    eCcolor = color(255,153,153);
    colorFlip=1;
    satelliteMoon=1;
  }
  else {
    eCcolor = color(255,102,155);
    colorFlip=0;
    satelliteMoon=0;
  }
  return false;
}