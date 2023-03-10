const express = require("express");
const path = require("path");

const app = express();

const creatPath = (page) => path.resolve(__dirname, "views", `${page}.html`);

const PORT = 3000;

app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`listening port ${PORT}`);
});

app.get("/", (req, res) => {
  res.sendFile(creatPath("index"));
});

app.get("/contacts", (req, res) => {
  res.sendFile(creatPath("contacts"));
});

app.get("/about", (req, res) => {
  res.redirect("/contacts");
});

app.use((req, res) => {
  res.status(404).sendFile(creatPath("error"));
});