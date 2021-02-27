const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine,world,body;
var board,die;
var bluePiece, blueSpaces,blueMoved;
//var redPiece,redSpace,redMoved;
function preload(){
board=loadImage("sprites/bg.jpg")
}
function setup(){
createCanvas(600,725);
engine=Engine.create();
world=engine.world;
die=[false,1,0,false,0]
bluePiece=new bluePiece(20,570,40,40);
blueSpaces=1;
blueMoved=false
//redPiece=new bluePiece(20,570,40,40);
redSpaces=1;
redMoved=true;

}
function draw(){
    background(158,113,79);
    Engine.update(engine);
    Image(board,0,0,600,600);
    bluePiece.display();

}