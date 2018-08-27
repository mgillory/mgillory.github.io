function Asteroid(pos = null, r = null) {
  this.pos = pos ? pos.copy() : createVector(random(width), random(height));
  this.r = r ? r * 0.5 : random(25, 60);
  this.vel = p5.Vector.random2D();
  this.total = random(5, 15);
  this.offset = [];
  for(let i = 0; i < this.total; i++) {
    this.offset[i] = random(-this.r * 0.5, this.r * 0.5);
  }

  this.render = () => {
    push();
    stroke(51);
    noFill();
    translate(this.pos.x, this.pos.y);

    beginShape();
    for(let i = 0; i < this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var r = this.r + this.offset[i];
      var x = r * cos(angle);
      var y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
    pop();
  }

  this.update = () => {
    this.pos.add(this.vel);
  }

  this.edges = () => {
    if(this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    } else if(this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    } else if(this.pos.y > height + this.r) {
      this.pos.y = -this.r;
    } else if(this.pos.y < -this.r) {
      this.pos.y = height + this.r;
    }
  }

  this.breakup = () => {
    var smallerAsteroids = [];
    smallerAsteroids[0] = new Asteroid(this.pos, this.r);
    smallerAsteroids[1] = new Asteroid(this.pos, this.r);
    return smallerAsteroids;
  }

  this.hits = (w, h) => {
    const d = dist(w, h, this.pos.x, this.pos.y);
    return (d < this.r);
  }
}