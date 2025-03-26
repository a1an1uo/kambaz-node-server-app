import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import cors from "cors";
const app = express()
app.use(cors());
// app.use((req, res, next) => {
//     res.header('Cache-Control', 'no-store, must-revalidate')
//     res.header('Pragma', 'no-cache')
//     res.header('Expires', new Date(0).toUTCString())
//     next()
// })
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)

