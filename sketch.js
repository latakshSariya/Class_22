const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var engine , world , body1 , ground;

function setup(){
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  var body1_options = {
    restitution:1.5
  }
  body1 = Bodies.circle(200,100,40,body1_options);
  World.add(world,body1);
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,50,options)
  World.add(world,ground);

}

function draw(){
  background("black");
  Engine.update(engine);
  ellipseMode(RADIUS);
  ellipse(body1.position.x,body1.position.y,40,40);
  rectMode(CENTER)
  rect(ground.position.x , ground.position.y , 400,50)

}