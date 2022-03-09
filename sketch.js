var box

function setup() {
  createCanvas(600, 600)
  box = createSprite(200, 200, 50, 50)
}

function draw() {
  background('black')
  if (keyIsDown(LEFT_ARROW)) {
    box.x = box.x - 5
  }

  if (keyIsDown(RIGHT_ARROW)) {
    box.x = box.x + 5
  }
  drawSprites()
}
