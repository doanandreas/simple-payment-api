const express = require("express");
const { paymentResources } = require("./const");
const app = express();
const port = 3000;

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/payments', (req, res) => {
  res.json(paymentResources)
});

app.post('/payments', (req, res) => {
  res.json(req.body)
});

app.get('/payments/:id', (req, res) => {
  res.json(paymentResources[req.params.id])
});

app.put('/payments/:id', (req, res) => {
  res.json(req.body)
});

app.delete('/payments/:id', (req, res) => {
  res.send(`delete ${req.params.id}`)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
