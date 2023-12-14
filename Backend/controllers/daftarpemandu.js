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



module.exports = { getDaftarpemandu };
