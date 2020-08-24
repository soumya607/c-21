var bullet, wall,thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 50, 10);
  bullet.shapeColor = color(255,255,255);
  bullet.debug = false;

  bullet.speed = random(223,321);
  bullet.weight = random(30,52);

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80,80,80);
  wall.debug = false;

  //speed = random(55,90);
  //weight = random(400,1500);
  thickness = random(22,83);
}

function draw() {
  background(0,0,0); 

  bullet.velocityX = bullet.speed;
  isTouch();
  wall.display();
  drawSprites();
}

function isTouch(){
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * bullet.weight * bullet.speed * bullet.speed/(thickness * thickness * thickness);

    if(damage>10)
    {
       wall.shapeColor = color(255,0,0);
    }


    if(damage<10)
    {
      wall.shapeColor = color(0, 255, 0);
    }
  }
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }
   return false
}