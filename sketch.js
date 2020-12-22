var car,wall;
var speed,weight;
var deformation;

function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor="black";
  car.velocityX=speed;
  car.shapeColor="black";
  deformation=0.5*weight*speed*speed/22500;
}

function draw() {
  background(255,255,255);
  background("cyan");  
  if( wall.x-car.x<wall.width/2+car.width/2){
  car.velocityX=0;
  car.x=1450;
  //Formula of deformation:
  if(deformation<100){  
  //Change the colour of car
  car.shapeColor=rgb(0,255,0);
}
  if (deformation>180) {
    car.shapeColor=rgb(250,0,0);
  }
  if (deformation<180 && deformation>100) {
    car.shapeColor=rgb(230,230,0);
  }

}
 
  drawSprites();
  console.log(deformation);
}