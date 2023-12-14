const FormPayment = require("../models/FormPayment.js");
const query = require("../config/Database.js");



const getPayment = async (req, res) => {
    try {
      const queryStr = "SELECT id, nama, tiket, tanggal, paket_wisata, pemandu, email , No_hp FROM formpayment";
      const formPayment = await query(queryStr);
      res.json(formPayment);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

  const payments = async (req, res) => {
    const { nama, tiket, tanggal, paket_wisata, pemandu, email , No_hp } = req.body;

    try {
      const queryStr = "INSERT INTO formpayment (nama, tiket, tanggal, paket_wisata, pemandu, email , No_hp) VALUES (?,?,?,?,?,?,?)";
       await query(queryStr, [nama, tiket, tanggal, paket_wisata, pemandu, email , No_hp]);
      res.json({ msg: "Register Berhasil" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

module.exports= {getPayment,payments};
