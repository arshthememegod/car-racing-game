class Form{
 constructor(){
  this.input=createInput("name")    
  this.button=createButton("PLAY")
  this.greeting=createElement("h3")

  this.reset=createButton("RESET")
 }
hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()

}
 display(){
   var title=createElement("h2")
  title.html("CAR RACING GAME")
  title.position(displayWidth/2-50,50)

 
 this.input.position(displayWidth/2-50,displayHeight/2-40)

   
 this.button.position(displayWidth/2-50,displayHeight/2+20)
this.reset.position(displayWidth-60,70)

 

  this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()

player.name=this.input.value()
this.greeting.html("Hello "+player.name)
this.greeting.position(displayWidth/2+20,displayHeight/2)

playernumber=playernumber+1
player.index=playernumber
 player.writeplayercount(playernumber)
 player.updatePlayerInfo()
  })

  this.reset.mousePressed(()=>{
game.writeGamestate(0)
Player.writefinishedplayer(0);
player.writeplayercount(0)
database.ref("/").update({
  players:null
  
})
  })
 }


}