const express = require('express')
const router = express.Router()
const {addDataModule,getModule,deleteModule} = require('../modules/module')

router.get('/', (req, res) => {
   res.send("Welcome to home page");
 })

router.post('/add',addDataModule)
router.get('/get',getModule)
router.delete('/del/:id',deleteModule)
module.exports = router