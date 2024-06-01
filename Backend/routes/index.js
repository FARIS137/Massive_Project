const express = require("express");
const {
  getDaftarpemandu,
  // RegisterPemandu,
} = require("../controllers/daftarpemandu.js");
const {
  getUsers,
  Register,
  login,
  Logout,
  ubahpassword
} = require("../controllers/Users.js");
const { getUlasan, Komen } = require("../controllers/Ulasan.js");
const { verifyToken } = require("../middleware/verifyToken.js");
const { refreshToken } = require("../controllers/refreshToken.js");
const { getPayment, payments } = require("../controllers/formPayment.js");

const router = express.Router();

router.get("/daftarPemandu", getDaftarpemandu);
// router.post('/daftarPemandu', RegisterPemandu);
router.get("/users", verifyToken, getUsers);
router.post("/users", Register);
router.put("/users", ubahpassword);
router.post("/login", login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);
// router.get('/download-cv/:id', downloadCV);
router.get("/ulasan", getUlasan);
router.post("/ulasan", Komen);
router.get("/formpayment", getPayment);
router.post("/formpayment", payments);
<<<<<<< HEAD
router.put("/update"); 
=======
router.put("/update");
>>>>>>> d049bd8e5b7d283e06b6403db79a9622bc2707e8

module.exports = router;
