var dots = [];
var sound;
var music;

function preload() {
    sound = loadSound('assets/pop.wav');
    music = loadSound('assets/ObservingTheStar.ogg');
}


function setup() {
    music.play();
    createCanvas(windowWidth, windowHeight);
    for (var i = 0; i < 250; i++) {
       dots.push(new Dot(random(width), random(height))); 
    }
}


function draw() {
    background(0);
    for (var i = dots.length - 1; i > 0; i--) {
        dots[i].show(); 
        dots[i].move(); 
        dots[i].jitter();
        if (dots[i].y < 0 - dots[i].r) {
            dots.splice(i,1);
            dots.push(new Dot(random(width), height + dots[i].r));
        }
        if (dots[i].hits(mouseX, mouseY)) {
            dots.splice(i,1);
            sound.play();
        }
    }
}
