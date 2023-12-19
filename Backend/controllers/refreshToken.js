const query = require("../config/Database.js");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    const findUserQuery = `
      SELECT * FROM users
      WHERE refresh_token = ?;
    `;

    const user = await query(findUserQuery, [refreshToken]);

    if (user.length === 0) return res.sendStatus(403);

    const userId = user[0].id;
    const name = user[0].name;
    const email = user[0].email;

    // Assuming you have a separate function to generate the access token
    const accessToken = generateAccessToken({ userId, name, email });

    res.json({ accessToken });
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

// Replace this function with your actual logic for generating access tokens
const generateAccessToken = ({ userId, name, email }) => {
  const accessToken = jwt.sign(
    { userId, name, email },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: "15s", // Adjust the expiration time as needed
    }
  );
  return accessToken;
};

module.exports = { refreshToken };
