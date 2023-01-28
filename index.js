const express = require("express")
const app = express()
app.use(express.json())
require("dotenv").config()
const cors = require("cors")
const {connect} = require("./config/db")
const {quizRouter} = require("./routes/quiz.routes")
app.use(cors({
     origin:"*"
}))

app.get("/",(req,res)=>{
     res.send("server run successfully")
})

app.use("/",quizRouter)

app.listen(process.env.PORT,async()=>{
      try{
           await connect
           console.log(`server run on ${process.env.PORT}`)
      }catch(err){
          console.log(err)    
      }
})