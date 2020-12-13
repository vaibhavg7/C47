var player,police;
var player_running, player_crouching;
var buildingframe,carframe,animalframe, aGroup, bGroup, cGroup, moneygroup, shieldgroup;
var police_running;
var ground;
var gameState="play";
var animal_running;
var restart,gameover;
var score=0;

function preload(){
  player_running = loadAnimation("images/running1.png", "images/running2.png","images/running3.png", "images/running4.png", "images/running5.png", "images/running6.png", "images/running7.png", "images/running8.png");
  player_crouching = loadAnimation("images/crouching.png");
  police_running = loadAnimation("images/cop1.png","images/cop2.png","images/cop3.png","images/cop4.png","images/cop5.png","images/cop6.png","images/cop7.png","images/cop8.png","images/cop9.png",)
  animal_running = loadAnimation("images/lion1.jpg","images/lion2.jpg","images/lion3.jpg","images/lion4.jpg","images/lion5.jpg","images/lion6.jpg","images/lion7.jpg","images/lion8.jpg","images/lion9.jpg","images/lion10.jpg","images/lion11.jpg","images/lion12.jpg",)
}


function setup() {
  createCanvas(1500,700);

  player=createSprite(250, 550, 50, 50);
  player.addAnimation("running", player_running);
  player.addAnimation("crouching", player_crouching);
  player.scale=0.7;
  player.debug=true;
  player.setCollider("rectangle",10,0,player.width-10,player.height-70);

  police=createSprite(70, 580, 50, 50);
  police.addAnimation("run",police_running);
  police.scale=0.8;
  police.debug=true;
  police.setCollider("rectangle",0,0,player.width-55,player.height-80);

  ground=createSprite(750,650,1500,20);

  restart=createSprite(750,380,30,30);
  gameover=createSprite(750,300,30,30);
  restart.visible=false
  gameover.visible=false

  aGroup = new Group();
  bGroup = new Group();
  cGroup = new Group();
  moneyGroup = new Group();
  shieldGroup = new Group();
}

function draw() {
  background(0); 
  
  player.collide(ground);

  fill("white");
  textSize(20);
  text("Score: "+score,30,30)

  if(gameState==="play"){
    //** CONTROLS */
    //console.log(player.y);
    if(keyDown("UP_ARROW") && player.y===584){
      player.velocityY=-13;
    }
    if(keyDown("DOWN_ARROW")){
      player.changeAnimation("crouching");
      player.scale = 0.5;
      player.setCollider("rectangle",10,0,70,140);
      player.y = 600;
    }

    buildingframe=Math.round(random(150,250));
    carframe=Math.round(random(800,1100));
    animalframe=Math.round(random(1350,1600));

    Cars();
    Buildings();
    Animals();
    Money();
    Shield();

    player.changeAnimation("running");
    player.scale=0.7;
    player.setCollider("rectangle",10,0,90,160);
    player.velocityY=player.velocityY+0.6;
    
    //Infinite ground
    ground.velocityX=-3;
    if(ground.x<0){
      ground.x=750;
    }
    
    if(player.isTouching(aGroup)||player.isTouching(bGroup)||player.isTouching(cGroup)){
      gameState="towardsEnd"
    }
    
    
    
  }
  else if(gameState === "towardsEnd"){
    
    Cars();
    Buildings();
    Animals();
    Money();
    Shield();

    //Ground stops
    if(ground.velocityX < 0){
        ground.velocityX=ground.velocityX+0.5;
    }
    //bGroup, cGroup, aGroup, shield, money should start to slow down

    bGroup.setVelocityXEach(-1);
    aGroup.setVelocityXEach(-2);
    cGroup.setVelocityXEach(-3);

    //police catches up
    police.x=police.x+2.5;

    player.velocityY=player.velocityY+0.6;
    
  
    if(police.isTouching(player)){
      gameState = "end";
    }
  }

  else if(gameState === "end"){
    /*player caught image
    police stop image
    animal stop image
    Restart option - icons for restart & game over 
    */
    ground.velocityX=0;
    bGroup.setVelocityXEach(0);
    aGroup.setVelocityXEach(0);
    cGroup.setVelocityXEach(0);

    restart.visible=true;
    gameover.visible=true;

    bGroup.setLifetimeEach(-1);
    aGroup.setLifetimeEach(-2);
    cGroup.setLifetimeEach(-3);

    if(mousePressedOver(restart)){
      reset();
    }

  }

  //console.log(ground.velocityX);
  

  drawSprites();
}

function reset(){
  gameState="play";

  bGroup.destroyEach();
  aGroup.destroyEach();
  cGroup.destroyEach();

  police.x=70;

  reset.visible=false;
  gameover.visible=false;

  /*
  player to the starting animation
  police to the starting animation
  */
}