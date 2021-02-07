
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paper=new Paper(50,100,10)
    ground=new Ground(200,550,880,25)
    dustbin=new Dustbin(500,533,100,10)
    dustbin1=new Dustbin(450,513,10,50)
    dustbin2=new Dustbin(550,513,10,50)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display()
  ground.display()
  dustbin.display()
  dustbin1.display()
  dustbin2.display()
}
function keyPressed(){
  if (keyCode === UP_ARROW) {
      
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-10})
  }
}



