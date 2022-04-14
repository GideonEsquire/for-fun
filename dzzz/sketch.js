var attractors = [];
var particles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // for (let i = 0; i < 3; i++) {
  //   attractors.push(createVector(windowWidth*Math.random(), windowHeight*Math.random()));
  // }

  attractors.push(createVector(windowWidth*0.1, windowHeight*0.9));
  // attractors.push(createVector(windowWidth*0.25, windowHeight*0.75));
  // attractors.push(createVector(windowWidth*0.75, windowHeight*0.25));
  attractors.push(createVector(windowWidth*0.9, windowHeight*0.1));

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
  background(0, 5)
  for (let i = 0; i < particles.length; i++) {
    // particles[i].attracted(createVector(mouseX, mouseY))

    for (let j = 0; j < attractors.length; j++) {
      particles[i].attracted(attractors[j]);
    }

    particles[i].update();
    particles[i].show();
  }
}
