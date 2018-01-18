var i=1;
var x,y;
function setup() {
  createCanvas(400,400);
  background(100);


}

function draw() {
 // background(100);
  fill(255,30,105,10);
  rect(0,0,400,400);
  translate(200,200);
  stroke(255);
  strokeWeight(2);
  line(-200,0,200,0);
  line(0,-200,0,200);
   
 if(mouseX>=0 && mouseX<=200 && mouseY>=0 && mouseY <=200) {
    fill(255,30,105,10);
    rect(0,0,400,400);
    print (mouseX);
    print(mouseY);
    fill(255);
    print("Quad1");
    print(oneX(i));
    print(oneY(i));
    ellipse(oneX(i)-100,oneY(i)-100,3,3);
    i=i+0.1;
  }
  
  else if (mouseX>=200 && mouseX<=400 && mouseY>=0 && mouseY<=200) {
    fill(255,30,105,10);
    rect(0,0,400,400);
    print (mouseX);
    print(mouseY);
    fill(255);
    print("Quad2");
    print(oneX(i));
    print(oneY(i));
    ellipse(twoX(i)+100,twoY(i)-100,3,3);
    i=i+0.1;
  }
  
   else if (mouseX>=0 && mouseX<=200 && mouseY>=200 && mouseY<=400) {
    fill(255,30,105,10);
    rect(0,0,400,400);
    print (mouseX);
    print(mouseY);
    //fill(200,150,75);
    print("Quad3");
    print(threeX(i));
    print(threeY(i));
    stroke(200,150,75,200);
    strokeWeight(3);
    line(twoX(i)-100,twoY(i)+100,twoY(i),twoX(i));
   i=i+0.5;
  }
  
  else {
    //fill("orange");
    //ellipse(fX(i),fY(i),10,10);
    stroke(255,255,0,50);
    line(fY(i),fX(i),fX(i),fY(i));
    
    fill(255,0,0,255);
    ellipse(fX(-i)+100,fY(-i)+100,10,10);
  
    fill(0,255,0,255);
    ellipse(fX(-i)-100,fY(-i)-100,10,10);
  
    fill(0,0,255,255);
    ellipse(fX(-i)-100,fY(-i)+100,10,10);
  
    fill(250,125,60,255);
    ellipse(fX(-i)+100,fY(-i)-100,10,10);
    i=i+0.02;
    
  }
}

function fX(x){
  return (sin(x)*50);
}

function fY(y){
  return (cos(y)*50);
}

function oneX(x){
 return(50*sin(x/9)-50*sin(x/7)); 
}

function oneY(y){
 return(50*cos(y/9)+50*cos(y/7)); 
}

function twoX(x){
 return(50*sin(x/9)-50*sin(x/7)); 
}

function twoY(y){
 return(50*cos(y/9)-50*cos(y/7)); 
}

function threeX(x){
 return(50*sin(x/9)-150*sin(x/7)); 
}

function threeY(y){
 return(50*cos(y/9)-150*cos(y/7)); 
}

function fourX(x){
 return(50*sin(x/9)+50*sin(x/12)); 
}

function fourY(y){
 return(50*cos(y/9)+50*cos(y/12)); 
}