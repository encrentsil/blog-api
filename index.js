import express from "express";
import 'dotenv/config'
import blogRouter from "./routes/blog.js";
import { dbConnection } from "./config/db.js";


const app = express();
app.use(express.json());
app.use(blogRouter)

dbConnection();

app.listen(5000, () => {
  console.log('Server is running');
});



