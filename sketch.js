
var engine, world;
var box1, box2;
var grounds;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
 
  box1 = new Box(200,300,50,50);
  box2 = new Box(240,100,50,100);
  grounds= new Ground(200,350,400,20);


  
}

function draw() {
  background("black"); 
  Engine.update(engine);
  
  box1.display();
  box2.display();
 grounds.display();
  drawSprites();
}