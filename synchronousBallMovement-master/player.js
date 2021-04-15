class Player{
    constructor(){
    this.index=null
    this.distance=0
    this.name=null
    this.rank=null
    }
           
    readplayercount(){
  database.ref("playercount").on("value",function(data){
  playernumber=data.val()
  })
    }

   writeplayercount(count){
  database.ref("/").update({
   playercount:count
  })
        
   }
   updatePlayerInfo(){
    var playerindex="players/player"+this.index
    database.ref(playerindex).set({
     name:this.name,   
     distance:this.distance

    })

   }
  static readplayerinfo(){
  database.ref("players").on("value",function(data){
    allplayersinfo=data.val();
  
  })

 }
readfinishedplayer(){
 database.ref("finishedplayers").on("value",function(data){
 this.rank=data.val();


 })
}
 static  writefinishedplayer(rank){
 database.ref("/").update({
   finishedplayers:rank
 }
  )

 }



}
