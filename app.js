const bodyParser = require('body-parser')
const express = require("express")
const app = express()
const router = require("./routes/routes")
 
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/",router);

app.listen(5000,() => console.log('API RUNNING...'));
