import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
connectDB();
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // required to read form data
app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => res.send("Server is running"));

app.use(notFound);
app.use(errHandler);

app.listen(port, () => console.log(`Server started on port ${port}`));
