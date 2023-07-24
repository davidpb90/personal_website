function setup() {
  createCanvas(400, 400);
}

function draw() {
  clear();
  // background(255);
  fill(random(255),random(255),random(255));
  ellipse(mouseX, mouseY, 100, 100);
}