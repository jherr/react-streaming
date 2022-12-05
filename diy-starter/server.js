"use strict";

const express = require("express");
const render = require("./server/render").default;

const app = express();
app.get("/", (_req, res) => {
  render(res);
});
app.use(express.static("build"));
app.use(express.static("public"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serving at http://localhost:${PORT}/`);
});
