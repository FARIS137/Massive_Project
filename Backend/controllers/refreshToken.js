const Users = require("../models/UserModel.js");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);

    // Assuming you are using Sequelize for querying the database
    const user = await Users.findOne({
      where: {
        refresh_token: refreshToken,
      },
    });

    if (!user) return res.sendStatus(403);

    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(403);

      const userId = user.id;
      const name = user.name;
      const email = user.email;
      const accessToken = jwt.sign(
        { userId, name, email },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: '15s',
        }
      );

      res.json({ accessToken });
    });
  } catch (error) {
    // Handle the error appropriately
    console.error(error);
    res.sendStatus(500);
  }
};

module.exports = { refreshToken };
