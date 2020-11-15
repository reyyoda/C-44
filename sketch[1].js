const Engine = Matter.Engine
const Bodies = Matter.Bodies
const World = Matter.World

var myEngine, myWorld


var bird, birdImg, hunter, hunterImg, bushes, bushesImg, ground
function preload(){
  birdImg = loadImage("Bird Cartoon.png")
  hunterImg = loadImage("Hunter image.png");
  bushesImg = loadImage("Bushes Image.png");
  
  
  
}

function setup() {
  createCanvas(800, 800);
  
  myEngine = Engine.create();
  myWorld = myEngine.world
}

function draw() {
  background(220);
}