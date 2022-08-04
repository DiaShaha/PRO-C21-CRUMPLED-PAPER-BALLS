
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, groundObj;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	ellipseMode(RADIUS);

	var ball_options ={
		restitution: 0.95,
		isStatic:false,
		friction:0,
		density:1.2
		}

	//Create the Bodies Here.
ball = Bodies.circle(200,600,20,ball_options)
World.add(world, ball)
groundObj = new Ground(width/2, 670, width, 20)
leftSide = new Ground(1100,600,20,120);
rightSide = new Ground(1350,600,20,120)
	Engine.run(engine);


}


function draw() {
  ellipseMode(RADIUS);
  background(0);
  
  ellipse(ball.position.x, ball.position.y,20)
  groundObj.display()
  leftSide.display()
  rightSide.display()
  drawSprites();
 
}

function keyPressed(){
if(keyCode === UP_ARROW){
  Matter.Body.applyForce(ball,ball.position,{x:85, y:-85})

}

}