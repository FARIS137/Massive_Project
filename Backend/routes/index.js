const express = require("express");
const {
  getDaftarpemandu,
  // RegisterPemandu,
  // downloadCV,
} = require("../controllers/daftarpemandu.js");
const {
  getUsers,
  Register,
  login,
  Logout,
} = require("../controllers/Users.js");
const { getUlasan, Komen } = require("../controllers/Ulasan.js");
const { verifyToken } = require("../middleware/verifyToken.js");
const { refreshToken } = require("../controllers/refreshToken.js");

const router = express.Router();

router.get('/daftarPemandu', getDaftarpemandu);
// router.post('/daftarPemandu', RegisterPemandu);
router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);
// router.get('/download-cv/:id', downloadCV);
router.get('/ulasan', getUlasan);
router.post('/ulasan', Komen);

module.exports = router;
