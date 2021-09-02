var lander,lander_img;
var bg_img;
var invisibleGround;
vy = 1.5;
vx = 0.2;

function preload(){
  bg_img = loadImage("bg.png");
  lander_img = loadImage("normal.png");
}
function setup() {
  createCanvas(1000,900);
  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  invisibleGround = createSprite(500,650,1000,20);
  invisibleGround.visible = false;
  lander.collide(invisibleGround);
}

function draw() {
  background(255,255,255);  
  image(bg_img,0,0);

  lander.position.y += vy;
  lander.position.x +=vx;

  drawSprites();
}