//Hier lege ich fest, dass es eine Klasse an Objekten gibt mit bestimmten Eigenschaften,
// und Display- und Update-Funktionen
class MySuperParticle {
	position;
	target;
	isDead = false;
	constructor(pos, target) {
		//this bedeutet, dass diese Variabel so nur innerhalb der Klasse definiert ist
		this.position = pos;
		this.target = target;
	}
	display() {
		stroke('blue')
		circle(this.position.x, this.position.y, 10);
	}

	update(target) {
		// set the target from the passed in new vector. Currently points at the mouse
		if (target) {
			this.target = target;
		}
		// p5.Vector.sub() subtracts two vectors (target - position)
		// This gives us a vector pointing from current position to target
		let direction = p5.Vector.sub(
			this.target,
			this.position
		);

		// normalize() sets the length of vector to 1
		// die Länge des Vektors wird auf 1 gesetzt, dadurch bewegt sich der Particle nur um 1 weiter, anstatt direkt zum Ziel zu springen
		direction.normalize();

		// mult(speed) multiplies the normalized vector by speed
		// This gives us consistent movement speed regardless of distance
		direction.mult(this.speed);

		// add() updates position by adding direction vector
		// position = position + (direction * speed)
		// This moves our particle one "step" towards target
		this.position.add(direction);

		// Optional: Check distance to target
		let distance = this.position.dist(
			this.target
		);
		// wenn der Particle weniger als 1 vom Ziel entfernt ist, tritt isDead ein
		// console.log(distance); 
		if (distance < 1) {
			this.isDead = true;
		}
	}
}
// ich erzeuge die Liste der Particle, sie ist leer
const listOfParticles = [];
/* const listOfParticles2 = [];
const listOfParticles3 = [];
const listOfParticles4 = []; */
// es gibt eine Zielposition
let targetPosition;
function setup() {
	createCanvas(500, 500);
	//ich lege die Zielposition fest
	targetPosition = createVector(
		width / 2,
		height / 2
	);
}

function draw() {
	background(255, 10);
//ich nehme jedes Element der Liste einzeln heraus und lass es die Funktionen ausführen
	listOfParticles.forEach((eachItemInList) => {
		eachItemInList.display();
		eachItemInList.update();
	});

/* 	listOfParticles2.forEach((eachItemInList) => {
		eachItemInList.display();
		eachItemInList.update();
	});

	listOfParticles3.forEach((eachItemInList) => {
		eachItemInList.display();
		eachItemInList.update();
	});

	listOfParticles4.forEach((eachItemInList) => {
		eachItemInList.display();
		eachItemInList.update();
	}); */
//ich zähle die Liste von hinten ab und prüfe, ob das Particle dead ist, wenn ja, wird es entfernt
	for (
		let j = listOfParticles.length - 1;
		j >= 0;
		j--
	) {
		if (listOfParticles[j].isDead) {
			listOfParticles.splice(j, 1);
		}
	}
	/* for (
		let j = listOfParticles2.length - 1;
		j >= 0;
		j--
	) {
		if (listOfParticles2[j].isDead) {
			listOfParticles2.splice(j, 1);
		}
	}

	for (
		let j = listOfParticles3.length - 1;
		j >= 0;
		j--
	) {
		if (listOfParticles3[j].isDead) {
			listOfParticles3.splice(j, 1);
		}
	}

	for (
		let j = listOfParticles4.length - 1;
		j >= 0;
		j--
	) {
		if (listOfParticles4[j].isDead) {
			listOfParticles4.splice(j, 1);
		}
	} */
//jeden 30. frame wird ein neues Element der Liste hinzugefügt, mit jeweiligem Start- und Zielpunkt
	if (frameCount % 70 === 0) {
		const randomChooice = random()
		if(randomChooice <= 0.25){
			listOfParticles.push(
				new MySuperParticle(
					createVector(random(width), 0),
					targetPosition
				)
			);
		}else if(randomChooice > 0.25 && randomChooice<= 0.5){
// bottom
		listOfParticles.push(
			new MySuperParticle(
				createVector(random(width), height),
					targetPosition
			)
		);
		}else if(randomChooice> 0.5 &&randomChooice<= 0.75){
// right
		listOfParticles.push(
			new MySuperParticle(
				createVector(width, random(height)),
					targetPosition
		)
		);
		}else if(randomChooice > 0.75){
			listOfParticles.push(
				new MySuperParticle( 
					createVector(0, random(height)),
					targetPosition
				)	
			)
		}
 }
	/* 	if (frameCount % 50 === 0) {
		listOfParticles2.push(
			new MySuperParticle(
				createVector(random(width), height),
				targetPosition
			)
		);
	}
	if (frameCount % 50 === 0) {
		listOfParticles3.push(
			new MySuperParticle(
				createVector(width, random(height)),
				targetPosition
			)
		);
	}
	if (frameCount % 50 === 0) {
		listOfParticles4.push(
			new MySuperParticle(
				createVector(0, random(height)),
				targetPosition
			));
	} */
}

//Ich lege eine Klasse mit best. Eigenschaften an. Ich lege eine leere Liste an.
//Immer wieder wird ein neues Element der Liste hinzugefügt.
// jedes Element aus der Liste führt die Funktionen aus.
