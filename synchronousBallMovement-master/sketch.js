var  database;
var gamestate1=0
var form,player,game
var playernumber;
var allplayersinfo;
var rank;
var car1,car2,car3,car4;
var cars;
var c1,c2,c3,c4,track,groundimg

function preload(){
 c1=loadImage("car1.png")
 c2=loadImage("car2.png")
 c3=loadImage("car3.png")
 c4=loadImage("car4.png")

 track=loadImage("track.jpg")
 groundimg=loadImage("ground.png")
}
function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-30);

  game=new Game()
  game.readGamestate()
  game.startGame();
  
  
}

function draw(){
  
  if(playernumber===4){
 game.writeGamestate(1)
 
  }
  if(gamestate1===1){
    clear()
 game.play()

  }
  if(gamestate1===2){

    game.end();
  }
}

