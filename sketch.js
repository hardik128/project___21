
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1=new Bob(360,500,61)
	bob2=new Bob(480,500,61)
	bob3=new Bob(600,500,61)
	bob4=new Bob(720,500,61)
	bob5=new Bob(840,500,61)
  ground1=new Ground(600,100,800,50)
  ground2=new Ground(600,750,1200,50)
  rope1=new Rope(bob1.body,ground1.body,-240,0);
  World.add(world,rope1)
  rope2=new Rope(bob2.body,ground1.body,-120,0);
  World.add(world,rope2)
  rope3=new Rope(bob3.body,ground1.body,0,0);
  World.add(world,rope3)
  rope4=new Rope(bob4.body,ground1.body,120,0);
  World.add(world,rope4)
  rope5=new Rope(bob5.body,ground1.body,240,0);
  World.add(world,rope5)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  console.log(bob1.body.position)
  drawSprites();
  ground1.display();
  ground2.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  keyPressed();
}

function keyPressed(){
  if (keyDown("UP")){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-20,y:0})
  
}
}
