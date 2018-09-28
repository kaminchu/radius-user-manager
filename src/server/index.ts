/* tslint:disable:no-console */
import express from "express";

const app = express();
app.use("/", (req, res) => {
  res.send("hello world");
});

app.listen(process.env.PORT || 3000, () => console.log("Listening to port 3000"));
