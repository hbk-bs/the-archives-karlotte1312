let x = 0;
let y = 0;
let radius = 50;


function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  y = height/2;
  x = - radius/2;
  strokeWeight(0.2)
  rectMode(CENTER)

}

function draw() {
  background(120,140,30,60);

  fill(200,150,120)
 
  circle(x, y, radius);
  x += 4;
  if (x > width+radius) {
    x = -radius;
    
    
  }

  fill(100,100,240)
  rect(width/2, height/2, radius*2)
}
