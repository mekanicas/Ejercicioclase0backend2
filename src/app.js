import express from "express";
import mongoose from "mongoose"
import router from "./router/user.routes.js";

const app = express();
mongoose.connect("mongodb://localhost:27017/clase00")
console.log("Mongo db connect")
app.use(express.json())

app.use("/api", router)

app.listen(8080, () => {
  console.log("server on port 8080");
});