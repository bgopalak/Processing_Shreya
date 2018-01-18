var startPixel = 150;
var iris = 0;
var eyecolor = "grey";
var pupilcolor = "black";
var nosecolor ="blue";

function setup() {
createCanvas(1000, 500);
background(100,700,225); 
}
function draw() {
  background(100);

    fill(255);
  //Head
    ellipse(startPixel-5,150,450,850);
  
  //Left Eye
    fill(eyecolor)
    ellipse(startPixel,150,150,150);
    fill(pupilcolor)
   ellipse(startPixel+iris,150+iris,50,50);
  
  //Right Eye
    fill(eyecolor)
    ellipse(startPixel+200,150,150,150);
    fill(pupilcolor)
    ellipse(startPixel+200+iris,150+iris,50,50);
 
    //Nose
    fill(nosecolor);
     triangle(startPixel+100+iris,300,startPixel+125+iris,350,startPixel+112+iris,350);
  
  //Mouth
    fill(550,700,231);
    rect(startPixel-50, 400, 200, 25);
  
  //Moving ability
    startPixel= startPixel+0.5
    if(startPixel>1000)
    {
     startPixel=150;
    }
  if(startPixel == 150)
  {
    iris = 10;
  }
  if(startPixel == 200)
  {
    iris = -10;
  }
  if(startPixel == 250)
  {
    iris = +10;
  }
  if(startPixel == 300)
  {
    iris = -10;
  }
  if(startPixel == 350)
  {
    iris = +10;
  }
  if(startPixel == 400)
  {
    iris = -10;
  }
  if(startPixel == 450)
  {
    iris = +10;
  }
    if(startPixel == 500)
  {
    iris = -10;
  }
  if(startPixel == 550)
  {
    iris = +10;
  }
  if(startPixel == 600)
  {
    iris = -10;
  }
}

//Project by Shreya Balaji