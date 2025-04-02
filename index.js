import express from 'express'
import Hello from "./Hello.js"
import Lab5 from "./Lab5/index.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import cors from "cors";
import UserRoutes from "./Kambaz/Users/routes.js";
import "dotenv/config";
import session from "express-session";
const app = express()
app.use(cors(
    {
        credentials: true,
        origin: process.env.NETLIFY_URL || "http://localhost:5173",
    }
));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.NODE_SERVER_DOMAIN,
    };
}
app.use(session(sessionOptions));
// app.use((req, res, next) => {
//     res.header('Cache-Control', 'no-store, must-revalidate')
//     res.header('Pragma', 'no-cache')
//     res.header('Expires', new Date(0).toUTCString())
//     next()
// })
app.use(express.json({ limit: '50mb' }));

UserRoutes(app);
CourseRoutes(app);
Lab5(app)
Hello(app)
app.listen(process.env.PORT || 4000)

