let x = 0;
let y = 0;
let radius = 50;
let hintergrund;

function preload(){
  hintergrund = loadImage ('https://hbk-bs.github.io/the-archives-karlotte1312/assets/images/blue_square_green_bg.png')
}

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  y = height/2;
  x = - radius/2;
  strokeWeight(0.2)
  rectMode(CENTER)
  background (hintergrund)
 
}

function draw() {
  background(hintergrund);
 // fill(100,100,240)
 // rect(width/2, height/2, radius*2)
  fill(200,150,120)
 
  circle(x, y, radius);
  x += 4;
  if (x > width+radius) {
    x = -radius;
    
    
  }


}