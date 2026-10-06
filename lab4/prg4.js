import { products } from "./data.js";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Home Page</h1>
        <a href = "/api/products"> Browser Products </a>
        `);
});

app.get("/api/products", (req, res) => {
  const items = products.map(({ reviews, description, ...rest }) => rest);
  res.status(200).json({ count: items.length, data: items });
});

// query string / request query must be before req parameters or dynamic url

app.get("/api/products/query", (req, res) => {
  const { search, limit } = req.query;
  console.log("Search:", search);
  console.log("Limit:", limit);
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((item) => {
      return item.name.toLowerCase().startsWith(search.toLowerCase());
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    res
      .status(200)
      .json({ data: [], msg: "No products matched your search criteria" });
  } else {
    res
      .status(200)
      .json({ count: sortedProducts.length, data: sortedProducts });
  }

  res.send("Products search page");
});

app.get("/api/products/:id", (req, res) => {
  const { id } = req.params;
  const p = products.find((item) => item.id === Number(id));
  if (p) res.status(200).json({ status: true, data: p });
  else
    res
      .status(404)
      .json({ status: false, msg: `product not found with id: ${id}` });

  // res.send(`will show product id:, ${id}`);
});

app.use((req, res) => {
  res.status(404).send("Route not found");
});
app.listen(3333, () => console.log("prg4 is running..."));