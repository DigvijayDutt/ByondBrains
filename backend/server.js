const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// ✅ Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT
});

db.connect((err) => {
    if (err) {
        console.error("❌ Database Connection Failed:", err);
    } else {
        console.log("✅ Connected to MySQL Database");
    }
});

// ✅ User Login Route
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, results) => {
        if (err) return res.status(500).json({ message: "Database Error", error: err });
        if (results.length === 0) return res.status(401).json({ message: "Invalid email or password" });

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) return res.status(401).json({ message: "Invalid email or password" });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });
        res.json({ message: "Login successful", token });
    });
});

// ✅ User Registration Route
app.post("/api/register", async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const query = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";

    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) return res.status(500).json({ message: "Database Error", error: err });
        res.status(201).json({ message: "User registered successfully" });
    });
});

// ✅ Protected Route (Example)
app.get("/api/protected", (req, res) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ message: "Access Denied" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return res.status(403).json({ message: "Invalid Token" });

        res.json({ message: "Protected data accessed", user: decoded });
    });
});

// ✅ Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});
