const query = require("../config/Database.js");

// Function to create the Users table
async function createUsersTable() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT PRIMARY KEY AUTO_INCREMENT,
      name VARCHAR(255),
      email VARCHAR(255),
      password VARCHAR(255),
      refresh_token TEXT
    )
  `;

  try {
    const [result] = await query(createTableQuery);
    console.log("Table 'users' created or already exists.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

// Call the createUsersTable function to create the table when your application starts
module.exports = { createUsersTable };
