const query = require("../config/Database.js");


// Function to create the Comments table
async function Comments() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS comment (
      id INT PRIMARY KEY AUTO_INCREMENT,
      ulasan TEXT
    )
  `;

  try {
    const [result] = await query(createTableQuery);
    console.log("Table 'comment' created or already exists.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

// Call the createCommentsTable function to create the table when your application starts

module.exports= {Comments};