const express = require("express");

const eth = require("./routes/eth");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/eth", eth);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
