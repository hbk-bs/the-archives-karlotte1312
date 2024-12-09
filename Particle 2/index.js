class Particle {
  isRandom = false;
  speed = 2;
  xOff;
  yOff;
  x;
  y;
  lifetime;
  isDead = false;

  constructor(_x, _y, _lifetime = 100, _isRandom = false) {
    this.x = _x;
    this.y = _y;
    this.lifetime = _lifetime;
    this.xOff = random (1000);
    this.yOff = random (1000);
    this.isRandom = _isRandom;
  }
display(){
  push();
  translate(this.x, this.y)
  fill(220,120,240);
  circle(0, 0, 10)
  pop()
}
update() {
if (this.isDead === true){
  return;
} 
if(this.isRandom){
this.x = this.x + random (-1, 1);
this.y = this.y + random (-1, 1);
}else{
  this.x += noise(this.xOff) * this.speed - this.speed / 2;
  this.y += noise(this.yOff) * this.speed - this.speed / 2;
  this.xOff += 0.01;
  this.yOff += 0.01; 
}
this.lifetime = this.lifetime - 1;
if(this.lifetime <= 0) {
  this.isDead = true;
};
}

}
const particles = [];

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  background(120,140,30);

}

function draw() {
  background(120,140,30);
 for(let i = 0; i< particles.length; i++){
  const p = particles[i];
  p.display();
  p.update();
 }
for (let j = particles.length -1; j >= 0; j--){
  if(particles[j].isDead) {
    particles.splice(j, 1);
  }
}
}
// 
function mouseDragged(){
  const oneParticle = new Particle(mouseX,mouseY, 100, false);
  particles.push(oneParticle);
}
