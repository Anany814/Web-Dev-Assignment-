const express = require("express");
const router = express.Router();
const db = require("../data/students");

// GET /students — return all students
router.get("/", (req, res) => {
  const students = db.getAll();
  res.status(200).json({
    success: true,
    count: students.length,
    data: students,
  });
});

// GET /students/:id — return a single student by ID
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID. ID must be a number." });
  }

  const student = db.getById(id);

  if (!student) {
    return res.status(404).json({ success: false, message: `Student with ID ${id} not found.` });
  }

  res.status(200).json({ success: true, data: student });
});

// POST /students — create a new student
router.post("/", (req, res) => {
  const { name, course, age, email } = req.body;

  // Validate required fields
  if (!name || !course || !age || !email) {
    return res.status(400).json({
      success: false,
      message: "Bad Request. All fields are required: name, course, age, email.",
    });
  }

  const newStudent = db.create({ name, course, age, email });

  res.status(201).json({
    success: true,
    message: "Student created successfully.",
    data: newStudent,
  });
});

// PUT /students/:id — update an existing student
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID. ID must be a number." });
  }

  const { name, course, age, email } = req.body;

  if (!name && !course && !age && !email) {
    return res.status(400).json({
      success: false,
      message: "Bad Request. Provide at least one field to update: name, course, age, email.",
    });
  }

  const updated = db.update(id, { name, course, age, email });

  if (!updated) {
    return res.status(404).json({ success: false, message: `Student with ID ${id} not found.` });
  }

  res.status(200).json({
    success: true,
    message: "Student updated successfully.",
    data: updated,
  });
});

// DELETE /students/:id — delete a student
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res.status(400).json({ success: false, message: "Invalid ID. ID must be a number." });
  }

  const deleted = db.remove(id);

  if (!deleted) {
    return res.status(404).json({ success: false, message: `Student with ID ${id} not found.` });
  }

  res.status(200).json({
    success: true,
    message: `Student with ID ${id} deleted successfully.`,
    data: deleted,
  });
});

module.exports = router;
