var heart_img;
var hearts = [];
var bg;
var sound;
var music;

function preload() {
  heart_img = loadImage('assets/pink_heart.png');
  bg = loadImage('assets/mothers_day.png')
  sound = loadSound('assets/sound.wav');
  music = loadSound('assets/bensound-tenderness.mp3');
}

function setup() {
  music.play();
  createCanvas(windowWidth, windowHeight);

  hearts[0] = new Heart(heart_img, width * .2, height * .5, random(0, 100), 40);
  hearts[1] = new Heart(heart_img, width * .8, height * .5, random(0, 100), 40);
}

function draw() {
  background(255, 255, 255);
  b = 10;
  image(bg, b, b, windowWidth - b*2, windowHeight - b*2);
  for (i = 0; i < hearts.length; i++) {
    hearts[i].show();
    hearts[i].jitter();
    hearts[i].sin_move();
  }
}

function mousePressed() {
  hearts.push(new Heart(heart_img, mouseX-12, mouseY-12, random(0, 100), random(20, 35)));
  console.log("click");
  sound.play();
}
