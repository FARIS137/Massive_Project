const query = require("../config/Database.js");

async function FormPayment() {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS formpayment (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nama VARCHAR(255),
        tiket VARCHAR(255),
        tanggal date,
        paket_wisata VARCHAR(255),
        pemandu VARCHAR(255),
        email VARCHAR(255),
        No_hp VARCHAR(255),
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  
      )
    `;
  
    try {
      const [result] = await query(createTableQuery);
      console.log("Table 'formpayment' created or already exists.");
    } catch (error) {
      console.error("Error creating table:", error);
    }
  }

module.exports= {FormPayment};
