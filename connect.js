const {MongoClient} = require("mongodb")

module.exports = {
   db:null,
   async connect(){
      try{
         var con = await MongoClient.connect("mongodb+srv://root:root@cluster0.xvho7.mongodb.net/?retryWrites=true&w=majority")
         this.db = con.db("income");
         console.log("-----------MongoDB Connected-------");
      }
      catch(err){
         console.log(err);
      }
   }
}