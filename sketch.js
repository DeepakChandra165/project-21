
var music;
var bluerect;
var redrect;
var greenrect;
var yellowrect;
var box;
var edgeright;
var edgeleft;
var edgetop;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
   createCanvas(800,600);

    //create 4 different surfaces

    bluerect = createSprite(100,580,175,20);
    bluerect.shapeColor = "blue";
    redrect = createSprite(300,580,175,20);
    redrect.shapeColor = "red";
    greenrect = createSprite(500,580,175,20);
    greenrect.shapeColor = "green";
    yellowrect = createSprite(700,580,175,20);
    yellowrect.shapeColor = "yellow";

    //create box sprite and give velocity
    box = createSprite(random(20,750),200,30,30);
    box.shapeColor = "white";
    box.velocityX = 6;
    box.velocityY = 11;
   

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edgeleft = createSprite(10,200,10,1000);
    edgeleft.visible = false
    edgeright = createSprite(790,200,10,1000);
    edgeright.visible = false
    edgetop = createSprite(200,10,3000,10);
    edgetop.visible = false


    //add condition to check if box touching surface and make it box
    box.bounceOff(edgeright);
    box.bounceOff(edgetop);
    box.bounceOff(edgeleft);
    
    box.bounceOff(redrect);
    box.bounceOff(bluerect);
    box.bounceOff(yellowrect);
    box.bounceOff(greenrect);

    if(istouching(redrect,box)){
        box.shapeColor = "red";
       music.play();
       }
       
       if(istouching(bluerect,box)){
        box.shapeColor = "blue";
       music.play();
       }

       if(istouching(greenrect,box)){
        box.shapeColor = "green";
       music.play();
       
    }

       if(istouching(yellowrect,box)){
        box.shapeColor = "yellow";
       music.stop();
       box.velocityX = 0;
       box.velocityY = 0;
    }
       
  
    drawSprites();
  
}

function istouching(object1,object2){
 
    if(object1.x-object2.x<object2.width/2+object1.width/2
      && object2.x-object1.x<object2.width/2+object1.width/2
      &&object1.y-object2.y<object2.width/2+object1.width/2
      && object2.y-object1.y<object2.width/2+object1.width/2
  ){
     return true;
  
  }
  
  else{
  
    return false;
  
  }
  
  }
