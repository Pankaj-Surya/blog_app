import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "../api/routes/auth.js"


//console.log(authRoutes)
const app = express();

//middleware before co come req
app.use(express.json());
app.use(cookieParser())


app.use("/api/auth",authRoutes)

app.get("/test", (req, res) => {
    res.json("test success")
})

app.listen(8800,()=>{
    console.log("Connection established")
})