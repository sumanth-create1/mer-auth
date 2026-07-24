import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoute.js";

connectDB();

const app = express();
const port = process.env.PORT || 5000


app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}));

// app.use("/" , (req,res) => {
//     res.send("API is working!!");
// })

app.use('/api/auth' , authRouter);

app.listen(port , () => {
    console.log(`server has started on ${port}`);
});