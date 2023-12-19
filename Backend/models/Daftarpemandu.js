// Import MySQL connection
const query = require("../config/Database.js");

// Function to create the table
async function DaftarPemandu() {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS daftarPemandu (
      id INT PRIMARY KEY AUTO_INCREMENT,
      nama_lengkap VARCHAR(255),
      jenis_kelamin ENUM('laki-laki', 'perempuan'),
      email VARCHAR(255),
      No_Handphone VARCHAR(255),
      cv BLOB,
      createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP

    )
  `;

  try {
    const [result] = await query(createTableQuery);
    console.log("Table 'daftarPemandu' created or already exists.");
  } catch (error) {
    console.error("Error creating table:", error);
  }
}

// Call the createDaftarPemanduTable function to create the table when your application starts
// module.exports = mysql; // Export MySQL connection
module.exports = { DaftarPemandu };
