var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(300, 100, 30, 60);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
