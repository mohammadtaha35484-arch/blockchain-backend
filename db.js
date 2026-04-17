const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, 'documents.db');

const db = new sqlite3.Database(dbPath);

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS documents (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            document_name TEXT NOT NULL,
            hash TEXT UNIQUE NOT NULL,
            upload_date DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);
});

module.exports = db;