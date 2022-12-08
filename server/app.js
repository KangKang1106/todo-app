const express = require("express");
const app = express();
const PORT = 8081;
const todorouter = require("./routes/todo");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", todorouter); // 기본 주소 : localhost:PORT/

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}/todos`);
});
