var bullet, wall,thickness;
var speed, weight;


function setup() {
  createCanvas(1600,400);


  bullet= createSprite(50, 200, 50, 50);
  wall = createSprite (1200, 200, thickness, height/2);
  

  speed=random(55,90);
  weight=random(400,1500);
  thickness=random(22,83);

  bullet.velocityX = speed;
  
  
}
function draw() {
  background("black");  
  
  if(collide(bullet, wall)){
    bullet.velocityX=0;
     damage();
  }
  drawSprites();
}

function collide(object1, object2){

 if( object1.x - object2.x < object1.width/2 + object2.width/2
 && object2.x - object1.x < object1.width/2 + object2.width/2
 && object1.y - object2.y < object1.height/2 + object2.height/2
 && object2.y - object1.y < object1.height/2 + object2.height/2) {
   return true;
 } else {
   return false; 
 }
}
function damage(){
  var damage = 0.5 *weight *speed * speed / (thickness *thickness *thickness);
  if(damage < 10){
    wall.shapeColor ="red";
  } 
  if (damage > 10){
    wall.shapeColor = "pink";
  } 
}