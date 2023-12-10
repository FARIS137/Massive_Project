const UlasanModel = require("../models/UlasanModel.js");
const query = require("../config/Database.js");

const getUlasan = async (req, res) => {
  try {
    const queryStr = "SELECT id, ulasan FROM comment";
    const comments = await query(queryStr);
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const Komen = async (req, res) => {
  try {
    const { ulasan } = req.body;
    const queryStr = "INSERT INTO comment (ulasan) VALUES (?)";
     await query(queryStr, [ulasan]);
    res.json({ msg: "Register Berhasil" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getUlasan, Komen };
