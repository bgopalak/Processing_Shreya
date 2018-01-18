//First Quadrant variables
var x,y;
var b2,b3;
var img;
//Second Quadrant Variables
var SQx,SQy;
//Thrid Quadrant variables
var TQx,TQy;
var x,y;
//Fourth Quadrant variables
var FQx,FQy;

function setup() {
  createCanvas(500, 500);
  //background(100);
  x=0;
  SQx=250;
  TQx=0;
  TQy=400;
  FQx=0;
  stroke(2);
  //translate(250,250);
  line(250,0,250,500);
  line(0,250,500,250);
  img=loadImage("SlideBG.png");
  background("pink");
  //drawSlopeSlide()
}

function draw() {
  
  line(250,0,250,500);
  line(0,250,500,250);
  background("pink");
  
  //Second Quadrant
  //Slide
  // Fifth Degree Polynomial 
  //-2.046*10^-12+3.8333x-0.08466x^2+0.000968x^3-0.00000453x^4+7.3333*10^-9x^5
  //Made a background image and used it as a slide and move the ball
  //Equation generated using mycurvefit.com
  
  if(mouseX>=0 && mouseX<=250 && mouseY>=0 && mouseY <=250)
  {
// Setup background as the slide and then move the balls over the slide
   background(img);
   noStroke();
    //Ball one follows the same path as the slide.
   y= -2.046*pow(10,-12)+3.83333*x-0.08466*pow(x,2)+0.000968*pow(x,3)-0.00000453*pow(x,4)+7.3333*pow(x,5)*pow(10,-9);  
   fill("pink");
   ellipse(x+8,y,10,10);
    
    // Ball two starts behind
    b2=x-20;
    y= -2.046*pow(10,-12)+3.83333*b2-0.08466*pow(b2,2)+0.000968*pow(b2,3)-0.00000453*pow(b2,4)+7.3333*pow(b2,5)*pow(10,-9); 
    fill("orange");
    ellipse(b2+8,y,10,10);
    
    //Ball three starts ahead
    b3=x+20;
    y= -2.046*pow(10,-12)+3.83333*b3-0.08466*pow(b3,2)+0.000968*pow(b3,3)-0.00000453*pow(b3,4)+7.3333*pow(b3,5)*pow(10,-9); 
    fill("white");
    ellipse(b3+8,y,10,10);
    
   x=x+0.5;
    
   if(x>320)
   {
     x=0;
   }
  
  }
  
  // First Quadrant
  else if (mouseX>=250 && mouseX<=500 && mouseY>=0 && mouseY <=250)
  {
    //stroke(1);
    stroke(175,255);
    line(250,0,250,500);
    line(0,250,500,250);
    noStroke();
        // Make it appear as the balls bounce using sin and cos to calculate SQy values.
    SQy= 40*sin(SQx/10)+205;
    fill("green");
    ellipse(SQx,SQy,10,10);

    SQy= 40*cos(SQx/3)+205;
    fill("orange");
    ellipse(SQx+3,SQy,10,10);
    
    SQy= 40*sin(SQx/7)+205;
    fill("blue");
    ellipse(SQx+10,SQy,10,10);
    
    SQy= 40*cos(SQx/2)+205;
    fill("white");
    ellipse(SQx+20,SQy,10,10);
    
    
    SQx=SQx+0.1;
    if(SQx>=500)
    {
      SQx=250;
    }
  } 
//Third Quadrant - Bicycle Movement
else if (mouseX>=0 && mouseX<=250 && mouseY>=250 && mouseY <=500)
{
  stroke(1);
  line(250,0,250,500);
  line(0,250,500,250);
  noStroke();
  
  //backwheel
  fill("orange");
  ellipse(TQx+0,475,25,25);
  fill(255,100,50);
  ellipse(TQx+0,475,10,10);
  fill("blue")
  ellipse(TQx+12*cos(TQx/10+10),475+12*sin(TQx/10+10),3,3);
  ellipse(TQx+12*cos(TQx/10),475+12*sin(TQx/10),5,5);
  fill("orange");
  
  //frontwheel
  ellipse(TQx+50,475,25,25);
  fill(255,100,50);
  ellipse(TQx+50,475,3,3);
  
  fill("blue");
  ellipse(TQx+50+12*cos(TQx/10+50),475+12*sin(TQx/10+50),5,5);
  ellipse(TQx+50+12*cos(TQx/10+50+10),475+12*sin(TQx/10+50+10),3,3);
  stroke("darkblue");
  strokeWeight(2);
  fill("orange");
  line(TQx,475,TQx+50,475);
  line(TQx+50,450,TQx+50,475);
  TQx=TQx+0.25; 
  if(TQx>=500)
  {
    TQx=0;
  }


}
  //Fourth Quarter revolving circles
  else
  {
    background(52,161,152);
  stroke(1);
  line(250,0,250,500);
  line(0,250,500,250);
  noStroke();
    fill("yellow");
  ellipse(375,375,30,30);
    fill("red");
    ellipse(370+8*cos(FQx*7),370+8*sin(FQx*7),5,5);
    ellipse(380+8*cos(FQx*8),380+8*sin(FQx*8),5,5);
    ellipse(370+8*cos(FQx*9),380+8*sin(FQx*9),5,5);
    ellipse(380+8*sin(FQx*10),370+8*cos(FQx*10),5,5);
    ellipse(370+8*sin(FQx*5),370+8*cos(FQx*5),2,2);
    ellipse(380+8*sin(FQx*3),380+8*cos(FQx*3),2,2);
    
  
  fill("white");
  ellipse(375+75*sin(FQx),375+75*cos(FQx),10,10);
 
  fill(100,0,255);
  ellipse(375+120*cos(0.5*FQx),375+120*sin(0.5*FQx),10,10);
    
   fill(50,100,255);
  ellipse(375+50*sin(0.7*FQx),375+50*cos(0.7*FQx),10,10);
  fill(255,100,50);
  ellipse(375+50*cos(0.7*FQx),375+50*sin(0.7*FQx),10,10);
    
  FQx = FQx + 0.02; 
  }
  
}
//Project by Shreya Balaji