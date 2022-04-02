// var attractors = [];
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < windowWidth; i+=10) {
    particles.push(new Particle(i,-1));
    particles.push(new Particle(i,windowHeight+1));
  }

}

function draw() {

  for (let i = 0; i < particles.length; i++) {
    particles[i].attracted(createVector(mouseX, mouseY));
    particles[i].update();
    particles[i].show();
  }
  background(51, 10);

}
