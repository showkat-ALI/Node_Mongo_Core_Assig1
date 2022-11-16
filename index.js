const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
const randomUserRoutes = require("./routes/v1/randomUser.route");

app.use(cors());
app.use(express.json());

app.use("/api/v1/user", randomUserRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Random user app running on the port ${port}`);
});
