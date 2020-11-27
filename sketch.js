
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,
mango9,mango10,mango11,stone,tree,boy,slingshot
var BackgroundImg
function preload()
{

BackgroundImg = loadImage("Sprites/bg.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.
	ground = new Ground(500,690,1000,40);
	boy = new Boy(290,620)
	stone = new Stone(200,380)
	mango1 = new Mango(750,350,10);
	mango2 = new Mango(700,325,10);
	mango3 = new Mango(775,400,10);
	mango4 = new Mango(850,400,10);
	mango5 = new Mango(830,320,10);
	mango6 = new Mango(650,350,10)
	mango7 = new Mango(580,390,10);
	mango8 = new Mango(650,410,10);
	mango9 = new Mango(700,410,10);
	mango10 = new Mango(780,300,10);
	mango11 = new Mango(890,370,10);
	tree = new Tree(750,450,450,450);
	slingshot = new SlingShot(stone.body,{x:245, y:575});
	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(BackgroundImg);
  ground.display();
  stone.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  slingshot.display();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

