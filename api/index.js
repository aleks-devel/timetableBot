require("dotenv").config();

const app = require("express")();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Express");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at :${port}`);
});