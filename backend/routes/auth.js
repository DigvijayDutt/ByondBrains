const express = require('express');
const pool = require('../config/db'); // Import MySQL connection
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For token generation
require('dotenv').config();

const router = express.Router();

// **User Registration (Signup)**
router.post('/register', async (req, res) => {
    const { name, email, phone, role, password } = req.body;

    if (!name || !email || !phone || !role || !password) {
        return res.status(400).json({ error: "All fields are required" });
    }

    try {
        // Check if the user already exists
        const [existingUser] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password before storing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Insert new user into database
        await pool.query(
            "INSERT INTO users (name, email, phone, role, password, created_at, updated_at) VALUES (?, ?, ?, ?, ?, NOW(), NOW())",
            [name, email, phone, role, hashedPassword]
        );

        res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message });
    }
});

// **User Login**
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        // Check if the user exists
        const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (users.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }

        const user = users[0];

        // Compare the hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials" });
        }

        // Generate JWT Token
        const token = jwt.sign(
            { userid: user.userid, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "7d" } // Token valid for 7 days
        );

        res.json({ message: "Login successful", token, user });
    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message });
    }
});

// **Protected Route Example**
router.get('/profile', authenticateToken, async (req, res) => {
    try {
        const [users] = await pool.query("SELECT userid, name, email, phone, role, created_at FROM users WHERE userid = ?", [req.user.userid]);
        if (users.length === 0) {
            return res.status(404).json({ error: "User not found" });
        }
        res.json(users[0]);
    } catch (error) {
        res.status(500).json({ error: "Server error: " + error.message });
    }
});

// **Middleware to Verify JWT**
function authenticateToken(req, res, next) {
    const token = req.header("Authorization");
    if (!token) return res.status(403).json({ error: "Access denied" });

    try {
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid token" });
    }
}

module.exports = router;
