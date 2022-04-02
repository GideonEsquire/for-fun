let n = 0;
let c = 10;
let hue_value = 100
let loops = 300
let ran_ang = 137.5

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);
  colorMode(HSB);
  stroke(255);
  angleMode(DEGREES);
}

function draw() {
  if (n > loops) {
    n = 0;
    hue_value = random(255);
    ran_ang = random(10, 250);
    c++;
  }

  let a = n * ran_ang;
  let r = c * sqrt(n);

  let x = r * cos(a) + width/2;
  let y = (r * sin(a)*.6) + height/2;

  fill(hue_value, map(n, 0, loops, 0, 100), 98);
  ellipse(x, y, c*3.5, c*3.5);

  n++;
}
