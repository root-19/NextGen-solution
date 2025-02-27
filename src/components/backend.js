const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const cors = require("cors");
const mysql = require("mysql");
const nodemailer = require("nodemailer");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nextgen_db",
});

db.connect((err) => {
  if (err) console.error("Database connection failed:", err);
  else console.log("Connected to MySQL");
});

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "your-email@gmail.com", pass: "your-password" },
});

// Store & Send Messages
app.post("/send-message", (req, res) => {
  const { sender, recipient, subject, content } = req.body;

  db.query(
    "INSERT INTO messages (sender, recipient, subject, content) VALUES (?, ?, ?, ?)",
    [sender, recipient, subject, content],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      // Send Email
      const mailOptions = {
        from: sender,
        to: recipient,
        subject: subject,
        text: content,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) return res.status(500).json({ error: error.message });

        io.emit("newMessage", { sender, recipient, subject, content });
        res.json({ message: "Message sent successfully!" });
      });
    }
  );
});

// Get Messages
app.get("/messages", (req, res) => {
  db.query("SELECT * FROM messages ORDER BY created_at DESC", (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(result);
  });
});

io.on("connection", (socket) => {
  console.log("New user connected");
  socket.on("disconnect", () => console.log("User disconnected"));
});

server.listen(5000, () => console.log("Server running on port 5000"));
