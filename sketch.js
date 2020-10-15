
var player , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var jungle, jungleimg

function preload(){
  
  jungleimg=loadImage("jungle.jpg");
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   
  
   score=0;
  
  jungle=createSprite(400,400,400,400);
  jungle.velocityX= -4;
  jungle.addImage("jun",jungleimg);
  
  
player = createSprite(50,340,20,50);
player.addAnimation("monkey",monkey_running);
player.scale=0.1;

  ground= createSprite(400,372,800,10);
 ground.velocityX= -4;
 
  console.log(ground.x);

 foodGroup= createGroup();
 obstacleGroup= createGroup();

  ground.visible=false;


  
}


function draw() {
  
     
  
 console.log(player.y);
  
  switch(score)
  {
    case 10:player.scale=0.12 ;
      break;
      
       case 20:player.scale=0.14;
      break;
      
       case 30:player.scale=0.16;
      break;
      
       case 40:player.scale=0.18;
      break;
      
      default: break;
  }
  
  if(obstacleGroup.isTouching(player)){
    player.scale=0.1;
  }
     
    background(255);
    
     //jump when the space key is pressed
    if(keyDown("space")&&player.y>=336.3){
    player.velocityY = -10 ;
    }      
   
   //add gravity
    player.velocityY = player.velocityY + 0.8;
   
    //resting the ground and make it infinite
  
     console.log(World.frameRate);
     console.log(World.frameCount);
      //stop player from falling down   
     createEdgeSprites();
     player.collide(ground);
  
   if (jungle.x<0) {
      jungle.x=jungle.width/2;
    }
  
  if (ground.x<0) {
      ground.x=ground.width/2;
    }
  
  
     
     
     obstacle();
    food();
    drawSprites();
  stroke=("white");
  textSize(24);
  fill("white");
  text("Score:" + score ,500,50)
  
 textSize(20);
     fill('black');
     score=Math.ceil(frameCount/frameRate());
     text("Score:" + score ,100,50);
  }
  
  function obstacle(){
    
     if(World.frameCount % 300 === 0) {
      var obstacles = createSprite(400,360,10,40);
      obstacles.velocityX = -6 ;
      
      //generate random obstacles 
     
      obstacles.addImage("obstace",obstaceImage);
      
      
      //assign scale and lifetime to the obstacle           
      obstacles.scale = 0.1;
      obstacles.lifetime = 70;
      //add each obstacle to the group
      obstacleGroup.add(obstacles);
    }
  
}

function food(){
     if(World.frameCount % 80 === 0) {
      var banana = createSprite(400,280,10,40);
      banana.velocityX = -6 ;
      
      //generate random obstacles 
      
      banana.addImage("bannana", bananaImage);
      
      
      //assign scale and lifetime to the obstacle           
      banana.scale = 0.1;
      banana.lifetime = 70;
      //add each obstacle to the group
     foodGroup.add(banana);
    }
  }
  




