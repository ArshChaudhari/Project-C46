class Gun {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    this.image = loadImage("./others/gun.png");
  }

  display() {
    if (keyIsDown(RIGHT_ARROW) && this.angle < 0.35) {
      this.angle += 0.02;
    }

    if (keyIsDown(LEFT_ARROW) && this.angle > -1.45) {
      this.angle -= 0.02;
    }
   
    var angle = this.body.angle;
    
    push();
    translate(this.x, this.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
