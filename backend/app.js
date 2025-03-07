import fs from "node:fs/promises";
import express from "express";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express();

const corsOptions = {
  origin: "https://guisouza95.github.io/activities", // URL do seu frontend no Railway
  methods: "GET, POST, PUT", // Métodos permitidos
  allowedHeaders: "Content-Type", // Cabeçalhos permitidos
};

app.use(cors(corsOptions));

app.use(express.static("./images"));
app.use(express.json());

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
  try{
    const fileContent = await fs.readFile("./data/photos.json");
    const photosData = JSON.parse(fileContent);
    res.status(200).json({ photos: photosData });
  } catch(error){
    console.error("Erro ao ler o arquivo de fotos:", error);
    res.status(500).json({ error:"Erro ao ler as fotos"});
  }
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
