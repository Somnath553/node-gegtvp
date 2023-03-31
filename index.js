
const express = require('express')
const app=express()

const cors = require('cors');
app.use(cors())
const port =process.env.PORT||8000

app.use(express.json())

app.post('/bfhl',(req,res)=>{
  let arr=req.body.data;
 

  let oddnum=[]
  let evennum=[]
  let alphabet=[]
  
  res.send(arr)

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} and http://localhost:${port}`)
})