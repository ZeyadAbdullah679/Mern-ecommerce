import dotenv from "dotenv";
dotenv.config();

import express from "express";
const app = express();
import mongoose from "mongoose";
import cors from "cors";

// middleware
const corsOptions = {
  origin: "https://front-mern-y5hx.onrender.com", // frontend URI (ReactJS)
};
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
mongoose
  .connect(
    "mongodb+srv://pizzaTeam:test1234@cluster0.6e9bp37.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    const PORT = 4000 || 8000;
    app.listen(PORT, () => {
      console.log(`App is Listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

// routes
import routes from "./routes/index.js";
routes(app);
