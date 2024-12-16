// ADD NOISE


class Particle {
	speed = 6;
	x = 0;
	y = 0;
  lifetime;
  speed = 2;
	isDead = false;
  r;


	constructor(_x, _y,_lifetime=100, _r) {
		this.x = _x;
		this.y = _y;
    this.lifetime = _lifetime;
    this.r = _r
	
	}
	display() {
		circle(this.x, this.y, 10);
	}
	update() { 
    if (this.isDead === true) {
			return;
		}

	 if (this.y <= height*0.25) {
				this.y += 2 ;
       
		} else {
			this.y += 2;
      this.x += random(-10,10)//this.r >0.5 ? random(6) : random(-6,0)
		}
		
    this.lifetime = this.lifetime -1
    if(this.lifetime <= 0){
      this.isDead = true;
    }
	}
}

const particles = [];

function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  y = height/2;
  x = width/2;
  strokeWeight(0.2)
  background(120,140,30);
  
  for (let i = 0; i< 10; i++) {
    const oneParticle = new Particle(width/2, 0, 200, random(1));
    particles.push(oneParticle); 
  }	
  

}
function draw() {
  
  for (let i = 0; i < particles.length; i++) {
  const p = particles[i];
  p.display();
  p.update();
}	}