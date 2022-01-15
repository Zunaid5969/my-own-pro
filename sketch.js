//write the story


var bg;
var shooter,shooter_shooting,monster;
var bgImg,shooter2Img,shooterShootingImg,monsterImg;
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monsterGroup, bulletGroup;

function preload(){
    bgImg=loadImage("assests/Images/sbg.jpg");
    shooterShootingImg=loadImage("assests/Images/shooter_3.png");
    shooter2Img=loadImage("assests/Images/shooter_2.png");
    monsterImg=loadImage("assests/Images/monster1.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
    bg=createSprite(windowWidth/2,windowHeight/2,20,20);
    bg.addImage(bgImg);
    bg.scale=(2);

    shooter=createSprite(windowWidth-1100,windowHeight-200,20,20);
    shooter.addImage(shooter2Img);  
    shooter.scale=(0.4);
   // console.log(shooter2);
    
    monster=createSprite(windowWidth-500,windowHeight-150,20,20);
    monster.addImage(monsterImg);
    monster.scale=(0.3);

    monsterGroup=new Group();
    bulletGroup=new Group();
}

function draw(){
  if(gameState===PLAY){
      handlePlayerControls();
      spawnMonsters();
  }

  drawSprites();
}

/*****handlePlayerControls ***********/
function handlePlayerControls () {
  if(keyDown("up_arrow")) {
    if(shooter.y>50 )
      shooter.y=shooter.y-3;
    
  } 
   
  if(keyDown("down_arrow")) {
    if(shooter.y<windowHeight-100 )
        shooter.y=shooter.y+3;
  } 
    
  if(keyWentDown("space")) {
      shooter.addImage (shooterShootingImg);
      // create bullets
      bullet=createSprite(shooter.width,shooter.y-30,20,10);
      bullet.velocityX=40;
      bulletGroup.add(bullet);
      bullet.lifeTime=100;
      shooter.depth = bullet.depth +2;
  } 

  if(keyWentUp("space")) {
    shooter.addImage (shooter2Img);
  } 
}

/***** spawnMonsters*****/
function spawnMonsters(){
  if(frameCount%100==0){
    monster=createSprite(windowWidth,random(50,windowHeight-200),20,20);
    monster.scale=0.3;
    monster.velocityX=-5;
    monster.lifetime=150;
    monster.addImage(monsterImg);
    monsterGroup.add(monster)
  }
}



