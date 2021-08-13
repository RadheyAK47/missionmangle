var bg, issImg, spc1Img,
    spc2Img,spc3Img,spc4Img;
    
var iss, spacecraft;
var hasDocked = false;

function preload(){
  bg =  loadImage("spacebg.jpg");
  issImg =  loadImage("iss.png");
  spc1Img =  loadImage("spacecraft1.png");
  spc2Img =  loadImage("spacecraft2.png");
  spc3Img =  loadImage("spacecraft3.png");
  spc4Img =  loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(800,400);

  iss=createSprite(330, 130, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.35;

  spacecraft=createSprite(285, 240, 50, 50);
  spacecraft.addImage(spc1Img);
  spacecraft.scale = 0.25;

}

function draw() {
  background(bg);

  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
    if(keyDown("DOWN_ARROW")){
      spacecraft.addImage(spc2Img);
    }
    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spc4Img);
      spacecraft.x = spacecraft.x -1;
    }
    if(keyDown("RIGHT_ARROW")){
      spacecraft.addImage(spc3Img);
      spacecraft.x = spacecraft.x +1;
    }
   
  }
  
    if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10) ){
      hasDocked = true;
      textSize(25);
      fill(255);
      text("DOCKING SUCCESSFUL!" ,200,300);
    }
  
  drawSprites();
}