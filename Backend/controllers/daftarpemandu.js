const Daftarpemandu = require("../models/Daftarpemandu.js");
const query = require("../config/Database.js");


const getDaftarpemandu = async (req, res) => {
  try {
    const queryStr = "SELECT id, nama_lengkap, jenis_kelamin, email, No_Handphone, cv FROM daftarPemandu";
    const daftarPemandu = await query(queryStr);
    res.json(daftarPemandu);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};



// const RegisterPemandu = async (req, res) => {
//   console.log("Request Body:", req.body);
//   console.log("Request File:", req.file);
//   const { nama_lengkap, jenis_kelamin, email, No_Handphone } = req.body;
//   const  cv  = req.file;

//   try {
    
//     // Assuming cv is a Buffer containing file data
//     const insertPemanduStr = "INSERT INTO daftarPemandu (nama_lengkap, jenis_kelamin, email, No_Handphone, cv) VALUES (?, ?, ?, ?, ?)";
//     await query(insertPemanduStr, [nama_lengkap, jenis_kelamin, email, No_Handphone, cv.file]);

//     res.json({ status: "Success" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };


module.exports = { getDaftarpemandu };
