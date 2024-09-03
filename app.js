import express from "express"

const app = express()

app.use(express.json())


import router from "./src/routes/post.route.js"

app.use("/api", router)


export {app}


