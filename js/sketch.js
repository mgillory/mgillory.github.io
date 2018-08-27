var canvas;
var asteroids = [];

setup = () => {
  canvas = createCanvas(windowWidth - 17, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1');

  for(let i = 0; i < 5; i++) {
    asteroids.push(new Asteroid());
  }
}

draw = () => { 
  background('#EEF1F6');

  for(let i = 0; i < asteroids.length; i++) {
    asteroids[i].render();
    asteroids[i].update();
    asteroids[i].edges();
  }
}

windowResized = () => {
  resizeCanvas(windowWidth - 17, windowHeight);
}

mouseClicked = () => {
  for(let i = asteroids.length - 1; i >= 0; i--) {
    if(asteroids[i].hits(mouseX, mouseY)) {
      if(asteroids[i].r > 15) {
        const smallerAsteroids = asteroids[i].breakup();
        asteroids = asteroids.concat(smallerAsteroids);
      }
      asteroids.splice(i, 1);
      break;
    }
  }
}