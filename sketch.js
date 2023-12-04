var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
//creacin de var matris que guarda muchos objetos
var ejemplo=[35,38,42,45,48,51]
var cloud,cloud_image,cloud_group;





function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloud_image = loadImage("cloud.png");
 
  
}

function setup() {

  createCanvas(600,200)
  
  //crear sprite de trex 
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 
}

function draw() {
  //establecer color de fondo
  background(180);
  
  
  
  //hacer que el trex salte al presionar la barra espaciadora
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evitar que el trex salte
  trex.collide(invisibleGround);
  //mandar a llamar la funcion spawn_cloud a la funcion draw
spawn_clouds();
  
  drawSprites();
  
}

function spawn_clouds() {

//condicion para crear fragmentos de nubes
if(frameCount%60===0){
  cloud = createSprite(603,100,40,10);
  cloud.addImage(cloud_image);
  cloud.y=Math.round(random(10,120));
  cloud.scale=0.4;
  cloud.velocityX = -2.5;
 //Ajusta la profundidad del objeto
 cloud.depth=trex.depth;
 trex.depth=trex.depth+1;
}
  
}



