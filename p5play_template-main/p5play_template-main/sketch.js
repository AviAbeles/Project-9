
function setup() {
  createCanvas(400,400);
  var ball = createSprite(200,200,10,10);

}

function draw() 
{
  background("white");
  
  if(keyDown(UP_ARROW)) {
    background("Yellow")
  }

  if(keyDown(DOWN_ARROW)) {
    background("Red")
  }

  drawSprites()
}




