
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  monkey=createSprite(60,300,10,10)  ;
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(200,340,800,20);
  
  obstacleGroup=createGroup();
  FoodGroup=createGroup();
  
 
}


function draw() {
  background("yellow");
  
  monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
  
  bananaSprite();
  
  if(keyDown ("space")&&monkey.y>200){
    monkey.velocityY=-12;
  }
  
  spawnObstacles();
  
  if(obstacleGroup.isTouching(monkey)){
    obstacle.velocityX=0;
    obstacle.lifetime=-2;
    survivalTime=0;
  }
  


drawSprites();  
survivaltime();
}
function bananaSprite(){
  if(frameCount%80===0){
  banana=createSprite(400,Math.round(random(120,200)),10,10);
  banana.y=  Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.velocityX=-6;
  banana.lifetime=70;
  FoodGroup.add(banana);
  }
}
function spawnObstacles(){
  if(frameCount%300===0){
    obstacle=createSprite(390,315);
    obstacle.addImage(obstacleImage);
    obstacle.scale=0.1;
    obstacle.velocityX=-6;
    obstacle.lifetime=70;
    obstacleGroup.add(obstacle);
  }
}

function survivaltime(){
  survivalTime=Math.round(frameCount);
  text ("survival time:"+survivalTime,150,20);
 
}





