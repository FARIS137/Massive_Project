const express = require("express");
const dotenv = require("dotenv");
const mysql = require("mysql2/promise");
const cors = require("cors");
const router = require("./routes/index.js");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const query = require("./config/Database.js");
const fs = require("fs");

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, 19).replace("T", " ");

router.post("/daftarPemandu", upload.single("cv"), async (req, res) => {
  console.log("Request Body:", req.body);
  console.log("Request File:", req.file);

  const { nama_lengkap, jenis_kelamin, email, No_Handphone } = req.body;
  const cvBuffer = req.file.buffer; 

  try {
    // Lakukan operasi dengan data yang diterima dari formulir
    const insertPemanduStr = "INSERT INTO daftarPemandu (nama_lengkap, jenis_kelamin, email, No_Handphone, cv, createdAt) VALUES (?, ?, ?, ?, ?, ?)";
await query(insertPemanduStr, [nama_lengkap, jenis_kelamin, email, No_Handphone, cvBuffer, formattedDate]);

    res.json({ status: "Success" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/downloadCV/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const selectCVStr = "SELECT cv FROM daftarPemandu WHERE id = ?";
    const [result] = await query(selectCVStr, [id]);

    if (!result || !result[0].cv) {
      return res.status(404).json({ error: "CV not found" });
    }

    const cvBuffer = result[0].cv;


    // Kirim buffer sebagai respons
    res.send(cvBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


// 

// Server listening
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
