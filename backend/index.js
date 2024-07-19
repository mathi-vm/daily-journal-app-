const express = require("express");
const ConnectDB = require("./config/db");
require("dotenv").config();
const userRoute = require("./routes/userRoutes");
const journalRoute = require("./routes/journalRoutes");

const cors = require("cors");
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 4000;
ConnectDB();
app.use(
  cors({
    origin: "http://localhost:3000",

    allowedHeaders: "Content-Type,Authorization", 
  })
);

//check api
app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(`/api/users`, userRoute);
app.use("/api/journal", journalRoute);


app.listen(process.env.PORT, () =>
  console.log(`server started on port: ${process.env.PORT}`)
);
