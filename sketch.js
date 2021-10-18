var bath
var brush
var eat
var boy
var sleep 
var bg
var drink
var gym

function preload() {
  bath = loadAnimation ("bath1.png", "bath2.png")
  sleep = loadAnimation ("sleep.png")
  brush = loadAnimation ("brush.png")
  bath = loadAnimation ("bath1.png","bath2.png")
  drink = loadAnimation ("drink1.png", "drink2.png")
  gym = loadAnimation ("gym1.png", "gym2.png")
  //eat, bath
  bg = loadImage ("iss.png")
}
function setup() {
  createCanvas(800,400);
  boy = createSprite(400, 200, 50, 50);
  boy.addAnimation ("sleeping", sleep);
  boy.scale = 0.1
}

function draw() {
  background(bg);  
  fill ("white")
  text ("use arrow keys to see my daily routine (try all the arrow keys!)", 50,60)
  if (keyDown("UP_ARROW")){
    boy.addAnimation("brushing",brush)
    boy.changeAnimation("brushing")
  }
  
  if (keyDown("DOWN_ARROW")){
    boy.addAnimation("bath",bath)
    boy.changeAnimation("bath")
  }


  if (keyDown("RIGHT_ARROW")){
    boy.addAnimation("drink",drink)
    boy.changeAnimation("drink")
  }


  if (keyDown("LEFT_ARROW")){
    boy.addAnimation("gym",gym)
    boy.changeAnimation("gym")
  }

  drawSprites();
}