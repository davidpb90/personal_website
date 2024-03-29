// function setup() {
//   createCanvas(600, 1200);
// }

// function draw() {
//   clear();
//   // background(255);
//   let c = color(255, 204, 0);
//   fill(c);
//   ellipse(mouseX, mouseY, 100, 100);
//   if (mouseIsPressed) {
//     var radius = 100;
//     var alpha = 255;
//     for (var i = 0; i < radius; i++) {
//       fill(alpha);
//       ellipse(mouseX, mouseY, i, i);
//       radius -= 5;
//       alpha -= 5;
//     }
//   }
// }

let circleRadius = 50;
let maxRadius = 300;
let isDiffusing = false;
function setup() {
  createCanvas(400, 400);
  // fill(255, 100);
  noStroke();
}
function draw() {
  clear();
  // background(255);
  let c = color(255, 204, 0);
  fill(c);
  if (isDiffusing) {
    circleRadius += 2; // Increase the radius to simulate diffusion
    if (circleRadius > maxRadius) {
      circleRadius = maxRadius;
    }
  } else {
    circleRadius -= 2; // Decrease the radius to revert diffusion
    if (circleRadius < 0) {
      circleRadius = 0;
    }
  }
  let x = width / 2;
  let y = height / 2;
  ellipse(mouseX, mouseY, circleRadius * 2);
}
function mousePressed() {
  isDiffusing = true;
}
function mouseReleased() {
  isDiffusing = false;    
}