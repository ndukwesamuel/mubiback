const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const mongoose = require("mongoose");
const port = process.env.PORT || 5000;

const Todo = require("./model/todo");

const connectDB = require("./config/db");
const todoRouter = require("./routes/todoRouter");

app.use(express.json());
app.use(cors());
connectDB();

// app.use(todoRouter);
//db connection
// mongoose
//   .connect(process.env.db_url)
//   .then(() => {
//     app.listen(3000, () => {
//       console.log("listening on port 3000");
//     });
//   })

//   .catch((err) => console.log(err));

app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  // res.json("")
  let data = [
    { name: "tunde", id: 1 },
    { name: "emeka", id: 2 },
    { name: "kaka", id: 3 },
    { name: "peter", id: 4 },
  ];
  res.json(data);
});

app.get("/test", (req, res) => {
  const todo = new Todo({
    title: "I !like Amala ",
    body: "food",
  });

  todo
    .save()
    .then((data) => res.json(data))
    .catch((err) => res.json(err));
});
// this is new
app.listen(port, () => {
  console.log(`Backend server is running! ${port}`);
});
