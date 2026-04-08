// express kütüphanesini import ediyoruz
const express = require("express");

// cors'u import ediyoruz (frontend bağlantısı için gerekli)
const cors = require("cors");

// .env dosyasını aktif ediyoruz
require("dotenv").config();

// express app oluşturuyoruz
const app = express();

// middleware: json veri alabilmek için
app.use(express.json());

// middleware: farklı originlerden gelen isteklere izin ver
app.use(cors());

// routes import
const movieRoutes = require("./routes/movie.routes");

// /api prefix ile route'ları kullan
app.use("/api", movieRoutes);

// test endpoint
app.get("/", (req, res) => {
  // ❌ res.rend yanlış
  // ✅ res.send doğru
  res.send("Server çalışıyor 🚀");
});

// port tanımı
const PORT = process.env.PORT || 5000;

// server başlat
app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});