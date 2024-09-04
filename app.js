import express from "express"
import cookieParser from "cookie-parser"
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true,limit:"20kb"}))
app.use(cookieParser())

import router from "./src/routes/api.routes.js"


app.use("/api", router)


export {app}


