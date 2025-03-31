const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2/promise');
const bcrypt = require('bcrypt');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(cors());

// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test database connection
pool.getConnection()
  .then((conn) => {
    conn.release();
    console.log("✅ Connected to MySQL Database");
  })
  .catch(err => console.error("❌ Database connection error:", err.message));


  app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const [users] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

        if (users.length === 0) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }

        const user = users[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: 'Incorrect password' });
        }

        res.json({ success: true, message: 'Login successful' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
      // Check if email already exists
      const [existingUser] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);

      if (existingUser.length > 0) {
          return res.status(400).json({ success: false, message: 'Email already registered' });
      }

      // Hash the password before storing it
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Insert new user into the database
      await pool.query('INSERT INTO users (email, password, created_at, updated_at) VALUES (?, ?, NOW(), NOW())', [email, hashedPassword]);

      res.json({ success: true, message: 'User registered successfully' });
  } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Server error' });
  }
});

app.get('/faqs', async (req, res) => {
  try {
    const [faqs] = await pool.query('SELECT question, answer FROM faqs');
    res.json(faqs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));