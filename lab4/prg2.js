import express from "express";
import path from 'path'
import { fileURLToPath } from "url";
import(fileURLToPath) from "node:url";

const app = express();
const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

// request goes here
app.get("/", (req, res) => {
    res.sendFile(path.join(dirname, "index.html"));
});
app.use((req,res)=>{
    res.status(404).send("page not found");
});
app.listen(3333, () => console.log("prg2 is running at 3333"));