
const express = require('express')
const app=express()
var bodyParser = require('body-parser')
const cors = require('cors');
app.use(cors())
const port =process.env.PORT||8000

app.use(express.json())
var jsonParser = bodyParser.json()

var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/bfhl', urlencodedParser,(req,res)=>{
  let arr=req.body.data;
 
  
  let oddnum=[]
  let evennum=[]
  let alphabet=[]
  
  res.send(arr)

})
app.get('/',(req,res)=>{
  res.send('hello')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port} and http://localhost:${port}`)
})