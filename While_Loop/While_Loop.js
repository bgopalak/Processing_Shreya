var x = 0;
function setup() {
createCanvas(600,600); 
background(100);
noStroke();
}

function draw() {
  
 background(100);
  
  /*
  while(x <= 100){
    fill(random(0,255),random(0,255),random(0,255),random(0,100));
    ellipse(random(0,600),random(0,600),random(50,100),random(50,100));
   x = x + 1; 
  }
  */
  
  for(x = 0; x <= 250; x = x + 1){
    fill(random(0,255),random(0,255),random(0,255),random(0,100));
    ellipse(random(0,600),random(0,600),random(50,100),random(50,100));  
  }
  millis(5000);
}