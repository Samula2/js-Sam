function setup() {
  createCanvas(600, 600);
  background("beige");
}

function draw() {
  
  stroke("#3DFF06");
  fill("teal");
    
  
  // console.log (mouseIsPressed);
  
  if (mouseIsPressed) {
    
  rect(mouseX,mouseY,45,45);
  }
}
