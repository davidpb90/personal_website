function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  // background(255);
  let c = color(255, 204, 0);
  fill(c);
  ellipse(mouseX, mouseY, 100, 100);
  if (mouseIsPressed) {
    var radius = 100;
    var alpha = 255;
    for (var i = 0; i < radius; i++) {
      fill(alpha);
      ellipse(mouseX, mouseY, i, i);
      radius -= 5;
      alpha -= 5;
    }
  }
}