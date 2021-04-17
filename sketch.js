const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world;
var object,ground
function setup() {

  createCanvas(400,400);
engine = Engine.create()
world = engine.world;
var options = {
  restitution:0.8
}
object = Bodies.circle(200,200,50,options)
World.add(world,object)
console.log(object)
var ground_options={
  isStatic:true
}
ground = Bodies.rectangle(200,390,200,20,ground_options)
World.add(world,ground)
}

function draw() {
  background(0);
  Engine.update(engine) 
  rectMode(CENTER) 
  rect (ground.position.x,ground.position.y,200,20)
  ellipseMode(RADIUS)
  ellipse (object.position.x,object.position.y,50,50)
}