import express from "express";
import 'dotenv/config'
import blogRouter from "./routes/blog.js";
import { dbConnection } from "./config/db.js";


const app = express();
app.use(express.json());
app.use(blogRouter)

dbConnection();

//Listnig for incoming messages
const port = process.env.PORT|| 5000;
  app.listen(port, () => {
    console.log(`App is running ${port}`)
  })

//  app.listen(5000, () => {
//   console.log('App is running');
//  });


