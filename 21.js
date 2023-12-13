
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	Engine = Engine.create();
	World = Engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	matter.bodies.circle(x, y, radius, [options], [maxSides])

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  groundObj.display();
  groundObj=new ground(width/2,670,width,20);
  leftSide = new ground(1100,600,20,120);
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.01,y:0})
	}
}

