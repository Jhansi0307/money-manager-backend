const mongo = require('../connect')
const { ObjectId } = require("mongodb");
module.exports.addDataModule = async (req, res, next) => {
   let data = await mongo.db.collection('income').insertOne(req.body);
   if(data){
      return res.send({data:data,msg:"Succesfully Data Added "})
   }
   else{
      return res.status(400).send({msg:"Error"})
   }
};
module.exports.getModule = async (req, res, next) => {
   let data = await mongo.db.collection('income').find().toArray();
   if(data){
      return res.send(data)
   }
   else{
      return res.status(400).send({msg:"Error"})
   }
};

module.exports.deleteModule = async (req,res,next)=>{
   var id=parseInt(req.params.id)
   let data = await mongo.db.collection('table').deleteOne({'_id':ObjectId(id)})
   res.send(data)
 }