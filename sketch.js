var fixedRect , movingRect;
var sprite1 , sprite2 , sprite3 , sprite4;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityX = 2;
  fixedRect.velocityY = 2;
  movingRect = createSprite(300,300,50,80);
  movingRect.shapeColor = "green";
  sprite1 = createSprite(100,100,50,50);
  sprite1.shapeColor = "yellow";
  sprite1.velocityX = 2;
  sprite1.velocityY = 2;
  sprite2 = createSprite(200,100,50,50);
  sprite2.shapeColor = "yellow";
  sprite2.velocityX = 2;
  sprite3 = createSprite(300,100,50,50);
  sprite3.shapeColor = "yellow"
  sprite3.velocityX = 2;
  sprite4 = createSprite(400,100,50,50);
  sprite4.shapeColor = "yellow"
  sprite4.velocityX = 2;
}

function draw() {
  background(0); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect,sprite4)){
    sprite4.shapeColor = "blue";
    movingRect.shapeColor = "blue";
  }else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  bounceOff(fixedRect,movingRect);
  drawSprites();
}
