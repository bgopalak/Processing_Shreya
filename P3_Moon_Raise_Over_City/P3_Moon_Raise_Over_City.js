var canvasx;
var canvasy;
var blinkingstar;
var backgroundcolor;
var startxpixel = 100;
var startypixel=400;
var lightstatus =0;
var cloudstart=70;
var streetlightcolor;
var i,j;
var fireflysize;



canvasx=400;
canvasy=400;
blinkingstar=1;

function setup() {
  createCanvas(canvasx,canvasy);
  //background(155,i,j);
  i=50;
  j=89;
}


function draw() {
  backgroundcolor =(100,i,j);
  i=i-0.25;
  j=j-0.25;
  background(backgroundcolor);
//Moon - Moving
  noStroke();
  
  fill(255,255,255,255);
  
    ellipse(startxpixel,startypixel,60,60);

  //fill(0,0,255,255);
  fill(backgroundcolor);
  ellipse(startxpixel-10,startypixel,45,45);

  startxpixel = startxpixel+0.25;
  //startxpixel = startxpixel+1;
  //startypixel = startypixel-0.25;
  //startypixel = startypixel-1;
  startypixel = -300/20000*(startxpixel-100)*(startxpixel-400);
  
//Cloud 1
  noStroke();
  fill(53,182,236,175);
  ellipse(cloudstart, 10, 50, 20);
  fill(53,182,236,225);
  ellipse(cloudstart+10, 15, 50, 20);
  //rect(cloudstart+10, 15, 50, 20);
  ellipse(cloudstart-20, 10, 20, 20);
  ellipse(cloudstart+5, 25, 20, 15);
  fill(53,182,236,225);
  ellipse(cloudstart+20, 10, 15, 25);
  fill(53,182,236,175);
 
// Cloud 2
  noStroke();
  fill(255,160,122,255);
  ellipse(cloudstart+100, 110, 50, 20);
  ellipse(cloudstart+110, 115, 50, 20);
  ellipse(cloudstart+80, 110, 20, 20);
  ellipse(cloudstart+105, 125, 20, 15);
  ellipse(cloudstart+120, 110, 15, 25);
  
  cloudstart= cloudstart+0.1;
  if (cloudstart >= 400)
  {
    cloudstart = 70;
  }
  
//Building 1
  fill("midnightblue");
  rect(0,330,30,70);
  rect(7,310,16,30);
  rect(12,300,6,10);
  rect(14,270,2,30);
  //clock
  fill("white");
  ellipse(15,315,8,8)
  
//lights
  fill("white");
  rect(0,335,3,5);
  rect(5,335,3,5);
  rect(10,335,3,5);
  rect(15,335,3,5);
  rect(20,335,3,5);
  rect(25,335,3,5);
  
  rect(0,345,3,5);
  rect(5,345,3,5);
  rect(10,345,3,5); 
  rect(15,345,3,5); 
  rect(20,345,3,5);
  rect(25,345,3,5);
  
  rect(0,355,3,5);
  rect(5,355,3,5);
  rect(10,355,3,5);
  rect(15,355,3,5);
  rect(20,355,3,5);
  rect(25,355,3,5);
  
  rect(0,365,3,5);
  rect(5,365,3,5);
  rect(10,365,3,5);
  rect(15,365,3,5);
  rect(20,365,3,5);
  rect(25,365,3,5);
  
  rect(0,375,3,5);
  rect(5,375,3,5);
  rect(10,375,3,5);
  rect(15,375,3,5);
  rect(20,375,3,5);
  rect(25,375,3,5);
  
  rect(0,385,3,5);
  rect(5,385,3,5);
  rect(10,385,3,5);
  rect(15,385,3,5);
  rect(20,385,3,5);
  rect(25,385,3,5);
  
//Building 2
  fill("midnightblue");
  rect(60,200,60,200);
  rect(80,200,20,200);
  rect(70,150,40,50);
  //Building 2 Lights
  
  fill("gold");
  rect(65,200,5,5);
  rect(65,220,5,5);
  rect(65,240,5,5);
  rect(65,260,5,5);
  rect(65,280,5,5);
  rect(65,300,5,5);
  rect(65,320,5,5);
  rect(65,340,5,5);
  rect(65,360,5,5);
  rect(65,380,5,5);
  
  rect(85,200,5,5);
  rect(85,220,5,5);
  rect(85,240,5,5);
  rect(85,260,5,5);
  
  rect(85,300,5,5);
  rect(85,320,5,5);
  rect(85,340,5,5);
  rect(85,360,5,5);
  rect(85,380,5,5);
  
  rect(105,200,5,5);
  rect(105,220,5,5);
  rect(105,260,5,5);
  rect(105,360,5,5);
  rect(105,380,5,5);
  
  rect(115,200,5,5);
  rect(115,220,5,5);
  rect(115,240,5,5);
  rect(115,260,5,5);
  
  
  //rect(115,300,5,5);
  if(lightstatus <= 120)
  {
    rect(115,300,5,5);
    rect(115,290,5,5);
    rect(85,280,5,5);
    
  }
  if(lightstatus >= 240)
  {
    fill("black");
    rect(115,300,5,5);
    rect(115,290,5,5);
    rect(85,280,5,5);
    lightstatus = 0;
    
  }
  lightstatus = lightstatus +1;
  
// Building 3
  fill("brown");
  rect(130,350,50,50);
  triangle(140,350,170,350,155,300);
  
//Building 4
  fill("midnightblue");
  ellipse(240,400,80,50);
  fill("blue");
  rect(230,380,20,20);
  
// Building 5
  fill(75,0,130,255);
  rect(300,260,60,140);
  rect(310,190,40,70);
  rect(320,150,20,40);
  rect(330,100,1,50);
  
  //Clock for building 5
  fill("white");
  ellipse(330,210,20,20);
  fill("black");
  ellipse(330,210,1,1);
  stroke(120);
  line(330,210,330,200);
  line(330,210,340,210);
  
  fill("silver");
  ellipse(310,270,5,5);
  ellipse(320,270,5,5);
  ellipse(330,270,5,5);
  ellipse(340,270,5,5);
  ellipse(350,270,5,5);
  
  ellipse(310,280,5,5);
  ellipse(320,280,5,5);
  ellipse(330,280,5,5);
  ellipse(340,280,5,5);
  ellipse(350,280,5,5);
  
  ellipse(310,290,5,5);
  ellipse(320,290,5,5);
  ellipse(330,290,5,5);
  ellipse(340,290,5,5);
  ellipse(350,290,5,5);
  
  ellipse(310,300,5,5);
  ellipse(320,300,5,5);
  ellipse(330,300,5,5);
  ellipse(340,300,5,5);
  ellipse(350,300,5,5);
  
  ellipse(310,310,5,5);
  ellipse(320,310,5,5);
  ellipse(330,310,5,5);
  ellipse(340,310,5,5);
  ellipse(350,310,5,5);
  
  ellipse(310,320,5,5);
  ellipse(320,320,5,5);
  ellipse(330,320,5,5);
  ellipse(340,320,5,5);
  ellipse(350,320,5,5);
  
  ellipse(310,330,5,5);
  ellipse(320,330,5,5);
  ellipse(330,330,5,5);
  ellipse(340,330,5,5);
  ellipse(350,330,5,5);
  
  rect(305,340,20,60);
  rect(335,340,20,60);
  
// Street Lights
  fill("orange");
  rect(0,380,1,20);  
  rect(50,380,1,20);
  rect(100,380,1,20);
  rect(150,380,1,20);
  rect(200,380,1,20);
  rect(250,380,1,20);
  rect(300,380,1,20);
  rect(350,380,1,20);
  rect(400,380,1,20);
  
  streetlightcolor=backgroundcolor;
  if(startxpixel >= 200)
  {
    streetlightcolor="white"
  }
  
  fill(streetlightcolor);
  ellipse(0,380,10,10);
  ellipse(50,380,10,10);
  ellipse(100,380,10,10);
  ellipse(150,380,10,10);
  ellipse(200,380,10,10);
  ellipse(250,380,10,10);
  ellipse(300,380,10,10);
  ellipse(350,380,10,10);
  ellipse(400,380,10,10);

  /*
  // Fireflies
  {
    fill("gold");
    if(blinkingstar>=0)
    {
      fireflysize=12;
    }
    if(blinkingstar >=20)
  {
    fireflysize=10;
  }
  
    ellipse(mouseX+10,mouseY,10,10);
    ellipse(mouseX+20,mouseY,10,10);
    ellipse(mouseX+30,mouseY,10,10);
    ellipse(mouseX+20,mouseY+15,10,10);
    ellipse(mouseX+20,mouseY+25,10,10);
    ellipse(mouseX+30,mouseY+20,fireflysize,fireflysize);  
  }
 */ 
  
//Blinking Stars
  
  if(blinkingstar >= 0)
  {
    fill("white");
  }
  if(blinkingstar >=20)
  {
    fill("grey");
  }
  noStroke();
  rect(0,20,2,2);
  rect(40,30,2,2);
  rect(60,40,2,2);
  rect(300,46,2,2);
  rect(370,36,2,2);
  rect(200,26,2,2);
  
  fill("grey");
  if(blinkingstar >= 40)
  {
    fill("white");
  }
  if(blinkingstar >=50)
  {
    blinkingstar=0;
    fill("grey");
  }
  
  rect(10,30,2,2);
  rect(50,40,2,2);
  rect(70,50,2,2);
  rect(310,56,2,2);
  rect(380,46,2,2);
  rect(210,36,2,2);
  
  blinkingstar = blinkingstar+1;
  
  if(startxpixel >= 420)
  {
   startxpixel = 100;
   startypixel = 400;
   i=50;
   j=89;
  }
  
  
  
  //Project by Shreya Balaji
  
}