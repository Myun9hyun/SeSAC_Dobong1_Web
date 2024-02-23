const express = require("express");
const { sequelize } = require("./models");
const app = express();
const PORT = 8084;

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true }));
app.use(express.join());
app.use("/", router);
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
});
