require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "9943060731",
  database: "jwt_auth",
  port: "3306",
});

db.connect((err) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to MySQL database");
});

const SECRET_KEY = process.env.JWT_SECRET || "yourSecretKey";

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query(
    "INSERT INTO users (username, password) VALUES (?, ?)",
    [username, hashedPassword],
    (err, result) => {
      if (err) {
        return res.status(500).json({ error: "Username already exists" });
      } else {
        res.json({ message: "User registered!" });
      }
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    "SELECT * FROM users WHERE username = ?",
    [username],
    async (err, results) => {
      if (
        err ||
        results.length === 0 ||
        !(await bcrypt.compare(password, results[0].password))
      ) {
        return res.status(401).json({ error: "Invalid credentials" });
      }
      // Generate JWT Token
      const token = jwt.sign({ id: results[0].id, username }, SECRET_KEY, {
        expiresIn: "1h",
      });

      // Send as HTTP-Only Cookie (More secure)
      res.cookie("token", token, { httpOnly: true, secure: true });
      res.json({ message: "Login successful" });
    }
  );
});

// **Logout (Clear Token)**
app.post("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});

app.listen(5000, () => console.log("Server running on port 5000"));
