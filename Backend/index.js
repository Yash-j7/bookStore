import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './route/book.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'
import path from 'path'

const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
const PORT = process.env.PORT

//MONGO CONNECT
const URI = process.env.MONGODBURI
try {
    mongoose.connect(URI)
} catch (error) {
    
}

//defing routes

app.use("/book",bookRoute)
app.use("/user",userRoute)


//deploying heroku

// if(process.env.NODE.ENV === "production")
//   {
//       const dirPath = path.resolve()
//       app.use(express.static("Frontend/dist"))
//       app.get("*",(req,res) => {
//         res.sendFile(path.resolve(dirPath,"Frontend","dist","index.html"))
//       })
//   }

//Versel

app.get('/', (req, res) => {
  app.use(express.static(path.resolve(__dirname, 'Frontend', 'build')));
  res.sendFile(path.resolve(__dirname, 'Frontend', 'build', 'index.html'));
});

https://runkit.com/
app.listen(PORT, () => {
  console.log(`Example app listening on PORT ${PORT}`)
})