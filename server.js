const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const ErroMiddleware = require("./middleware/errorMiddleware");
const userRoutes = require("./Routes/userRoutes");
const labRoutes = require("./Routes/labRoutes");
const productRoutes = require("./Routes/productRoutes");
const complaintRoutes = require("./Routes/complaintRoutes");
const requestRoutes = require("./Routes/requestRoutes");
var cors = require('cors')
const app = express();
const path = require("path");

dotenv.config();
connectDB();

app.use(express.json());
app.use(cors())


const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Api Working");
});

// routes
app.use("/user", userRoutes);
app.use("/product", productRoutes)
app.use("/lab", labRoutes)
app.use("/complaint", complaintRoutes)
app.use("/request", requestRoutes);
app.use('/public', express.static('public'))

app.use(ErroMiddleware.notFound);
app.use(ErroMiddleware.errorHandler);

app.listen(port, () => {
  console.log(`server is running on ${port} port`);
});
