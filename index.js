const express = require("express");
const mongo = require("./connect");
const routes = require('./routes/routes')
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json())
mongo.connect();

app.use("/",routes);

app.use('/',routes)

app.listen(process.env.PORT || 8000, () => {
  console.log("Server Started at 8000");
});
