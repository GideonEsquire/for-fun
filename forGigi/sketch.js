var star_img;
var stars = [];
var bg;
var sound;
var music;
var w;
var h;

function preload() {
  star_img = loadImage('assets/star.png');
  bg = loadImage('assets/retirement.png')
  sound = loadSound('assets/sound.wav');
  music = loadSound('assets/bensound-tenderness.mp3');
}

function setup() {
  w = windowWidth; //perhaps this is what is causing the issue on iOS?
  h = windowHeight; //perhaps this is what is causing the issue on iOS?
  music.play();
  createCanvas(w, h);

  stars[0] = new Star(star_img, w * .33, h * .62, random(0, 100), 40);
  stars[1] = new Star(star_img, w * .63, h * .62, random(0, 100), 40);
}

function draw() {
  image(bg, 0, 0, w, h);
  for (i = 0; i < stars.length; i++) {
    stars[i].show();
    stars[i].jitter();
    stars[i].sin_move();
  }
}

function mousePressed() {
  stars.push(new Star(star_img, mouseX-12, mouseY-12, random(0, 100), random(20, 35)));
  console.log("click");
  sound.play();
}
