import { products } from "./data";
import express from "express";

const app = express();






app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(3333, () => console.log("prg4 is running at 3333"));