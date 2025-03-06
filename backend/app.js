import fs from "node:fs/promises";
import bodyParser from "body-parser";
import express from "express";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.static("./images"));
app.use(bodyParser.json());

const SECRET_KEY = "your_secret_key";

// Generate a JWT token
const createJSONToken = (email) => {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
};

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // allow all domains
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  next();
});

app.get("/photos", async (req, res) => {
  const fileContent = await fs.readFile("./data/photos.json");
  const photosData = JSON.parse(fileContent);
  res.status(200).json({ photos: photosData });
});

app.listen(3000);