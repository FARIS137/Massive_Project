const createUsersModel = require("../models/UserModel.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const query = require("../config/Database.js");

const getUsers = async (req, res) => {
  try {
    const queryStr = "SELECT id, name, email FROM users";
    const users = await query(queryStr);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const Register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if the email or name already exists
    const checkUserStr = "SELECT id FROM users WHERE email = ? OR name = ?";
    const existingUser = await query(checkUserStr, [email, name]);

    if (existingUser.length > 0) {
      // Email or name already exists, return an error
      return res.status(400).json({ error: "Email atau nama sudah terdaftar" });
    }

    // Email and name are not registered, proceed with registration
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);

    const insertUserStr =
      "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    await query(insertUserStr, [name, email, hashPassword]);

    res.json({ msg: "Register Berhasil", username: name });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const queryStr = "SELECT id, name, email, password FROM users WHERE email = ?";
    const [user] = await query(queryStr, [req.body.email]);

    if (!user) return res.status(404).json({ msg: "email tidak ditemukan" });

    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.status(404).json({ msg: "wrong password" });

    const userId = user.id;
    const name = user.name;
    const email = user.email;

    const accessToken = jwt.sign(
      { userId, name, email },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "30s",
      }
    );

    const refreshToken = jwt.sign(
      { userId },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d", // Set the expiration time for the refresh token
      }
    );

    // Update the refresh_token in the database
    const updateRefreshTokenStr = "UPDATE users SET refresh_token = ? WHERE id = ?";
    await query(updateRefreshTokenStr, [refreshToken, userId]);

    // Set refreshToken cookie
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in milliseconds
      secure: process.env.NODE_ENV === "production", // Set to true in production
    });

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);

  try {
    const queryStr = "SELECT id FROM users WHERE refresh_token = ?";
    const user = await query(queryStr, [refreshToken]);

    if (!user[0]) return res.sendStatus(204);

    const userId = user[0].id;

    const updateRefreshTokenStr = "UPDATE users SET refresh_token = NULL WHERE id = ?";
    await query(updateRefreshTokenStr, [userId]);

    res.clearCookie("refreshToken");
    return res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getUsers, Register, login, Logout };
