class Heart {

  constructor(img, x, y, offset, size) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.offset = offset;
    this.size = size;
  }

  show() {
    image(this.img, this.x, this.y, this.size, this.size);
  }

  jitter() {
      let jitter_amount = 0.4;
      let dif = random(-jitter_amount, jitter_amount)
      this.x += dif;
      this.y += dif;
  }

  sin_move() {
      this.y += sin(frameCount/20 + this.offset);
  }

}