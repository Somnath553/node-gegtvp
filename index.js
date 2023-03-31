
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

  for(let i in arr)
  {
    if(isinfinite(arr[i]))
    {
       if(arr[i]%2==0)
       {
         evennum.push(arr[i])
       }
       ele{
         oddnum.push(arr[i])
       }
    }
    else
    {
      alphabet.push(arr[i])
    }
  }

  cont responce={
    is_success: true,
user_id: "john_doe_17091999",
 email : 'john@xyz.com',
roll_number:'ABCD123',
odd_numbers:evennum,
even_numbers:oddnum,
alphabets:alphabet
  }
  
  res.send(responce)

})
app.get('/',(req,res)=>{
  res.send('hello')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port} and http://localhost:${port}`)
})