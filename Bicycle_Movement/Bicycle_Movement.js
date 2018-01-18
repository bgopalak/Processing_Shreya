var x,y;
function setup() {
  createCanvas(500, 500);
  //size(500,500);
  background(100);
  x=0;
  y=0;

}

function draw() {
  background(100);
  /*
  ellipse(x+250,700,100,100);
  ellipse(x+400,700,100,100);
  strokeWeight(5);
  line(300,700,350,700);
  line(400,650,400,550);
  strokeWeight(5);
  rect(350,550,100,25);
  //line(400,600,350,600);
  //line(350,600,350,620);
  line(350,600,450,575);
  //line(450,575,425,550);
  
  ellipse(x+250,250,25,25);
  ellipse(x+300,250,25,25);
  stroke("black");
  strokeWeight(2);
  line(x+250,250,x+300,250);
  line(x+300,250,x+300,225);
  x=x+0.25;
  */
  noStroke();
  fill("orange");
  
  ellipse(x+250,250,100,100);
  
  
  fill("blue");
  ellipse(250+x+50*cos(y),250+50*sin(y),10,10);
  ellipse(250+x+50*cos(y+10),250+50*sin(y+10),3,3);
  x=x+0.2;
  y=y+0.01
}