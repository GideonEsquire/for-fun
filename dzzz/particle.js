function Particle(x, y) {
  this.pos = createVector(x, y);
  this.prev = createVector(x, y);
  this.vel = createVector();
  this.acc = createVector();
  rand1 = Math.random() * 100
  rand2 = Math.random() * 5000
  rand3 = Math.random() * 3000

  this.update = function() {
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.vel.mult(.95);
    this.acc.mult(0);
  }

  this.show = function() {
    stroke(0, 0, 200, 10);
    strokeWeight(1);
    line(this.pos.x, this.pos.y, this.prev.x, this.prev.y);
    this.prev.x = this.pos.x;
    this.prev.y = this.pos.y;
  }

  this.attracted = function(target) {
    let force = p5.Vector.sub(target, this.pos);
    let dsquared = constrain(force.magSq(), rand1, rand2);
    let strength = rand3/dsquared;
    force.setMag(strength);
    this.acc.add(force);
  }

}
