import express from "express";
import morgan from "morgan";
import config from "./config.js";

const app = express();
app.use(morgan("combined"));
app.use(express.json());

const favs = [];
app.get("/", (req, res) => {
  return res.json({
    data: {
      id: 123,
      value: "hello",
      id: 234,
      value: "morming",
    },
  });
});
app.post("/", (req, res) => {
  favs.push({
    id: new Date().getTime(),
    text: req.body.text,
  });
  return res.json({
    message: "added data",
  });
});
app.put("/", (req, res) => {
  return res.json({
    message: "put route",
  });
});
app.delete("/",(req,res)=>{
    return res.json({
        message:"Deleted route"
    })
})

