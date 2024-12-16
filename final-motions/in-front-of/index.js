let x = 0;
let y = 0;
let radius = 20;
let xSpeed = 1;
let ySpeed = 1;
let hintergrund;

function preload(){
  hintergrund = loadImage ('https://hbk-bs.github.io/the-archives-karlotte1312/assets/images/blue_square_green_bg.png')
}

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  y = height/2;
  x = width/2;
 xSpeed = random(-8,4);
 ySpeed = random(-4,4);


  strokeWeight(0.2)
  background(hintergrund);
  
 //rectMode(CENTER);
  //fill(100,100,240);
  //rect(width / 2, height /2, radius*10)

}

function draw() { 
background(hintergrund, 60);
  
  noStroke()
  fill(200,130,190)

 circle(x, y, radius);
 x += xSpeed;
 y += ySpeed; 

  if (x > width/1.3 || x < width - width/1.3 ) {
     xSpeed *= -1;
  }

  if (y > height/1.3 || y < height - height/1.3) {
    ySpeed *= -1;
 }
  

}


function keyPressed() {
  if (key === 's') {
    const name = prompt(
      'Enter name',
      `out-${Date.now()}.png`
    );
    save(name);
  }
}