const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001;

const JWT_SECRET = "your_jwt_secret_key";

app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static(path.join(__dirname, "public/images")));

const loadProductsData = () => {
  const dataPath = path.join(__dirname, "data", "db.json");
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data).products;
};

app.get("/api/products", (req, res) => {
  const products = loadProductsData();
  res.json({ products });
});

app.get("/api/products/:id", (req, res) => {
  const products = loadProductsData();
  const productId = parseInt(req.params.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return res.status(404).send("Product not found");
  }

  res.json(product);
});

app.post("/auth/register", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.status(201).send("User registered successfully");
  } catch (error) {
    console.error("Registration error:", error);
    res.status(400).send(error.message);
  }
});

app.post("/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).send("Invalid credentials");
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, {
      expiresIn: "10m",
    });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

mongoose
  .connect("mongodb://localhost:27017/authdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));


  app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
