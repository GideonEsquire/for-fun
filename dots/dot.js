function Dot(x, y) {
    this.x = x;
    this.y = y;
    this.r = 20;
    this.redd = random(255);
    this.bluee = random(255);
    this.green = random(255);

    this.show = function() {
        noStroke();
        fill(this.redd, this.bluee, this.green, 100);
        rectMode(CENTER);
        ellipse(this.x, this.y, this.r*2, this.r*2);
    }

    this.move = function() {
        this.y = this.y - 2;
    }

    this.jitter = function() {
        this.x += random(-1,1);
        this.y += random(-1,1);
    }

    this.hits = function(mx, my) {
        var d = dist(this.x, this.y, mx,my);
        return d < this.r * 1.5
    }

}
