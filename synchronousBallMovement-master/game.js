class Game {
    constructor(){}

  readGamestate(){
 database.ref("gamestate").on("value",function(data){
     gamestate1=data.val()
 })

}
writeGamestate(state){
 database.ref("/").update({
  gamestate:state   
 })

}
 startGame(){

    if(gamestate1===0) {
        player=new Player()
    player.readplayercount()
   form=new Form()
    
form.display()
    }
    car1=createSprite(100,200)
  car1.addImage(c1)
  
    car2=createSprite(300,200)
    car2.addImage(c2)
  
    car3=createSprite(500,200)
    car3.addImage(c3)
  
    car4=createSprite(700,200)
    car4.addImage(c4)
  
    cars=[car1,car2,car3,car4]

 }

 play(){
   
form.hide();
Player.readplayerinfo();
player.readfinishedplayer();

if(allplayersinfo!==undefined){
     background(groundimg)
    image(track,0,-displayHeight*4,displayWidth,displayHeight*5)

var index=0
var x=200
var y


var ypos=130
for(var plr in allplayersinfo){
    index+=1
    x+=200
    y=displayHeight-allplayersinfo[plr].distance
    cars[index-1].x=x
    cars[index-1].y=y
   /* ypos+=20
    if(plr==="player"+player.index){
      fill("red")
    
    }
    else{
        fill("black")
    }
   text(allplayersinfo[plr].name+": "+allplayersinfo[plr].distance,120,ypos)*/
   if(index===player.index){
     fill("red")
   ellipse(x,y,60,60)

   camera.position.x=displayWidth/2
   camera.position.y=cars[index-1].y
   

   }


}

}
if(keyIsDown(UP_ARROW)&&player.index!==null){
player.distance+=30
player.updatePlayerInfo()
}

if(player.distance>3780){

 gamestate1=2
 player.rank=player.rank+1
 Player.writefinishedplayer(player.rank);
 
}
drawSprites()
 }
 end(){
 // console.log("game is over")
 console.log(player.rank)
 }
}