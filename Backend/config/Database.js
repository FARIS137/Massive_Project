const mysql = require("mysql2/promise");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "auth_db",
  connectionLimit: 10,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

// query adalah string
// value adalah array query
async function query(query, values) {
  try {
    const [results] = await db.query(query, values ?? []);
    return results;
  } catch (error) {
    console.error("Error executing query:", error);
    throw error; // Rethrow the error for handling in the calling code
  }
}

module.exports = query;
