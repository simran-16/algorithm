var fixedrect,movingrect;
var rect,rect2;
function setup() {
  createCanvas(800,400);
 fixedrect= createSprite(400, 200, 50, 50);
 fixedrect.shapeColor="blue";
 movingrect= createSprite(600, 200, 50, 50);
 movingrect.shapeColor="blue";
rect= createSprite(100,100,30,30);
rect.shapeColor="red";
//rect.velocityY=3;
rect.velocityX=3;
rect2= createSprite(300,300,30,30);
rect2.shapeColor="pink";
rect2.velocityY=-3;
//rect2.velocityX=-3;
}

function draw() {
  background("yellow");  
  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;
  if(movingrect.x-fixedrect.x<= movingrect.width/2+fixedrect.width/2  && fixedrect.x-movingrect.x<= movingrect.width/2+fixedrect.width/2 && 
    movingrect.y-fixedrect.y<= movingrect.height/2+fixedrect.height/2  && fixedrect.y-movingrect.y<= movingrect.height/2+fixedrect.height/2 ) {
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";

  }
  else{
    movingrect.shapeColor="blue";
    fixedrect.shapeColor="blue";
  }
  if(rect.x-rect2.x<=rect.width/2+ rect2.width/2  && rect2.x-rect.x<=rect.width/2+ rect2.width/2){
    rect.velocityX *= -1;
    rect2.velocityX *= -1;
  } 
  if(rect.y-rect2.y<=rect.height/2+ rect2.height/2  && rect2.y-rect.y<=rect.height/2+ rect2.height/2){
    rect.velocityY *= -1;
    rect2.velocityY *= -1;
  } 
  drawSprites();
}