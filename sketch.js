
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ball1;
var dustbin1,dustbin2,dustbin3;
var ground;
var slingshot1


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new ball(210,200)
	
	dustbin1 = new dustbin(630,605,140,110);

	slingshot1 = new launcher(ball1.body,{x:100,y:100});
	
                               


    

    //fill("brown");
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	
	 World.add(world,ground);
	 
	/// ground.shapeColor = color("brown");


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

fill("brown");
rect(ground.position.x,ground.position.y,800,10)

 
  ball1.display();
  dustbin1.display();
  


  drawSprites();
 
}
/*function keyPressed(){
if(keyCode === UP_ARROW){
	Matter.Body.applyForce(ball1.body,ball1.body.position,{x:80,y:-80});
}	
}*/
function mouseDragged(){
Matter.Body.setPosition(ball1.body,{x: mouseX , y: mouseY});
}
function mouseReleased(){
 slingshot1.fly();
}



