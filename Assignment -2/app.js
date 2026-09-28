const express = require("express");
const logger = require("./middleware/logger");
const studentRoutes = require("./routes/studentRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Built-in middleware to parse incoming JSON request bodies
app.use(express.json());

// Custom logger middleware — logs method, URL, and timestamp
app.use(logger);

// Mount student routes at /students
app.use("/students", studentRoutes);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to the Student Management REST API!" });
});

// 404 handler — catches any unmatched routes
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error("Server Error:", err.message);
  res.status(500).json({ success: false, message: "Internal Server Error." });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
