var attractors = [];
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  for (let i = 0; i < 7; i++) {
    attractors.push(createVector(windowWidth*Math.random(), windowHeight*Math.random()));
  }

  for (let i = 0; i < windowWidth; i+=2) {
    particles.push(new Particle(i, windowHeight));
    particles.push(new Particle(i, -1));
  }

  for (let i = 0; i < windowHeight; i+=2) {
    particles.push(new Particle(-1, i));
    particles.push(new Particle(windowWidth, i));
  }

}

function draw() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = 0; j < attractors.length; j++) {
      particles[i].attracted(attractors[j]);
    }
    particles[i].update();
    particles[i].show();
  }
}
