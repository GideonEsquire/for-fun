// Vast majortiy copied from Daniel Shiffman
// http://codingtra.in
// Steering Text Paths
// Video: https://www.youtube.com/watch?v=4hA7G3gup-4

var font;
var vehicles = [];

function preload() {
  font = loadFont('AvenirNextLTPro-Demi.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  let words = ['Happy', 'Spring', 'Nicole']

  for (let i = 0; i < words.length; i++) {
    
    var points = font.textToPoints(words[i], windowWidth/2-100, windowHeight/2 + i*100 - 100, 72, {
      sampleFactor: 0.25
    });

    for (let j = 0; j < points.length; j++) {
      var pt = points[j];
      var vehicle = new Vehicle(pt.x, pt.y);
      vehicles.push(vehicle);
      // stroke(255);
      // strokeWeight(8);
      // point(pt.x, pt.y);
    }
  }
}


function draw() {
  background(255);
  for (var i = 0; i < vehicles.length; i++) {
    var v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}

