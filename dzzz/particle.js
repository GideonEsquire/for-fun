function Particle(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = createVector();
  // this.vel = p5.Vector.random2D();
  this.acc = createVector();

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.mult(.95);
    this.acc.mult(0);
  }

  this.show = function() {
    stroke(255, 10);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  this.attracted = function(target) {
    let force = p5.Vector.sub(target, this.pos);
    // let dsquared = constrain(force.magSq(), 5, 100);
    // let g = 30;
    // let strength = g/dsquared;
    let strength = 5;
    force.setMag(strength);
    this.acc.add(force);
  }

}
