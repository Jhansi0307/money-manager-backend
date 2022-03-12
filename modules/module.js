const mongo = require('../connect')
const { ObjectId } = require("mongodb");
module.exports.addDataModule = async (req, res, next) => {
   let data = await mongo.db.collection('income').insertOne(req.body);
   if(data){
      return res.send({data:data,msg:"Data Added Succesfully"})
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
   var a=parseInt(req.params.id)
   let data = await mongo.db.collection('table').deleteOne({'_id':ObjectId(a)})
   res.send(data)
 }