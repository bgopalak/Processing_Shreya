var x = 0;

function setup() {
  createCanvas(400, 400);
  background(0);

}

function draw(){
  fill(0,0,0,10);
  rect(0,0,400,400);
  translate(width/2,height/2);
   stroke(255,255,255);
  strokeWeight(2.5);
  line(0,-200,0,200);
  line(-200,0,200,0);
  stroke(245,135,170,255);
  strokeWeight(3.5);
  if(mouseX >= 0 && mouseX <= 200 && mouseY >= 0 && mouseY <= 200) {
      stroke(255,255,0);
      fill(255,255,0);
    ellipse(fX(x),fY(x),3,3);

      stroke(255,0,255);
      fill(255,0,255);
    ellipse(fX(x)-100,fY(x)-100,3,3);

      stroke(100,130,255);
      fill(100,130,255);
    ellipse(fX(x)-100,fY(x)+100,3,3);

      stroke(255,200,50);
      fill(255,200,50);
    ellipse(fX(x)+100,fY(x)-100,3,3);

      stroke(255,255,255);
      fill(255,255,255);
    ellipse(fX(x)+100,fY(x)+100,3,3);

  x=x+0.1;
  }

  if(mouseX >= 200 && mouseX <= 400 && mouseY >= 0 && mouseY <= 200) {
    point(sX(x),sY(x));
    point(sX(x)-200,sY(x)-200);
    point(sX(x)-200,sY(x));
    point(sX(x),sY(x)-200);
    point(sX(x)-100,sY(x)-100);
    x=x+0.05;
  }

  if(mouseX >= 0 && mouseX <= 200 && mouseY >= 200 && mouseY <= 400) {
    strokeWeight(1);
      stroke(255,255,0);
      fill(255,255,0);
    line(fX(x),0,0,fY(x));

      stroke(255,0,255);
      fill(255,0,255);
    line(fX(x)-100,-100,-100,fY(x)-100);

      stroke(100,130,255);
      fill(100,130,255);

    //line(fX(x)-100,-100,100,fY(x)+100);

      stroke(255,200,50);
      fill(255,200,50);
    //ellipse(fX(x)+100,fY(x)-100,3,3);

      stroke(255,255,255);
      fill(255,255,255);
    //ellipse(fX(x)+100,fY(x)+100,3,3);
  x=x+0.1;
  }
}

function fX(x) {
  return (75*sin(x));
}

function fY(x) {
  return 75*cos(x);

}

function sX(x) {
  return (40*sin(x)+40*sin(x/10)+100);
}

function sY(x) {
  return 40*cos(x)+100;
}
