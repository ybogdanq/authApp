import dotenv from "dotenv"
dotenv.config()
import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import mongoose from 'mongoose'
import router from "./routes/index.js"
import errorMiddleware from "./middlewares/error-middleware.js";

const PORT = process.env.PORT | 5000;
const app = express()

const corsOptions ={
  origin:'http://localhost:3000',
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}

app.use(express.json())
app.use(cookieParser())
app.use(cors(corsOptions))
app.use("/api", router)
app.use(errorMiddleware)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () => console.log(`Server started on PORT = ${PORT}`))
  } catch (error) {
    console.log(error);
  }
}

if(process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"))
}

start()