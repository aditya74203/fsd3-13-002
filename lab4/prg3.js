import express from "express";
import path from "path";
import { fileURLToPath } from "node:url";

const app = express();
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

app.use(express.static(path.join(dirname, "public")));

app.use((req, res) => {
    res.status(404).send("Page not found");
});

app.listen(3333, (req, res) => console.log("prg3 is running..."));