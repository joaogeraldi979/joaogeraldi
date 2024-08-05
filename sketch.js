function setup() {
  createCanvas(1800, 1800);
  background("green");
}

function draw() {
  fill("blue");
  stroke("rgb(203,235,9)");
  if(mouseIsPressed)
  rect(mouseX,mouseY,80,80);
}
