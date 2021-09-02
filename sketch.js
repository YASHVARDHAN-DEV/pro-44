var lander,lander_img;
var bg_img;
var invisibleGround;

var thrust,land;
vy = 1.5;
vx = 0.2;

function preload(){
  bg_img = loadImage("bg.png");
  lander_img = loadImage("normal.png");
  thrust = loadAnimation("b_thrust_1.png","b_thrust_2.png","b_thrust_3.png");
  land = loadAnimation("landing_3.png");

  thrust.playing = true;
  thrust.looping = false;
}
function setup() {
  createCanvas(1000,900);
  
  frameRate(80);
  timer = 1500;
  thrust.frameDelay = 5;

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;

  invisibleGround = createSprite(500,650,1000,20);
  invisibleGround.visible = false;
  lander.collide(invisibleGround);

  lander.addAnimation('thrusting',thrust);
  lander.addAnimation('landing',land);
}

function draw() {
  background(255,255,255);  
  image(bg_img,0,0);

  push()
  fill(255)
  text("Horizontal Velocity:"+round(vx,2),800,50)
  text("Vertical Velocity:"+round(vy),800,75)
  pop()

  lander.position.y += vy;
  lander.position.x +=vx;

  drawSprites();
}

function keyPressed(){
  if(keyCode===DOWN_ARROW ){
    lander.changeAnimation('thrusting');
    thrust.nextFrame();

  }
  if(keyCode===UP_ARROW ){
    lander.changeAnimation('landing');
    land.nextFrame();

  }
}