var fixedrect,movingrect



function setup() {
  createCanvas(400,400);
  fixedrect = createSprite(200,200, 50, 50)
  movingrect = createSprite(300,200,50,50);
  fixedrect.shapeColor = "Brown"
  movingrect.shapeColor = "Green"

}

function draw() {
  background(0);  
  movingrect.x = mouseX
  movingrect.y = mouseY

  
  if (movingrect.x - fixedrect.x<= movingrect.width/2+fixedrect.width/2
    && fixedrect.x - movingrect.x<= movingrect.width/2+fixedrect.width/2
    && movingrect.y - fixedrect.y<= movingrect.height/2+fixedrect.height/2
    && fixedrect.y - movingrect.y<= movingrect.height/2+fixedrect.height/2){
    fixedrect.shapeColor = "red"
    movingrect.shapeColor = "red"

  } else{
    fixedrect.shapeColor = "Brown"
  movingrect.shapeColor = "Green"

  }
  drawSprites();
}