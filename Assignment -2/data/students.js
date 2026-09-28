// In-memory student data store (no database)
let students = [
  { id: 1, name: "Rahul Sharma", course: "BCA", age: 20, email: "rahul@example.com" },
  { id: 2, name: "Priya Singh", course: "BTech", age: 21, email: "priya@example.com" },
  { id: 3, name: "Amit Kumar", course: "BCA", age: 19, email: "amit@example.com" },
];

// Auto-increment ID counter
let nextId = 4;

const getAll = () => students;

const getById = (id) => students.find((s) => s.id === id);

const create = (studentData) => {
  const newStudent = { id: nextId++, ...studentData };
  students.push(newStudent);
  return newStudent;
};

const update = (id, updatedData) => {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return null;
  students[index] = { ...students[index], ...updatedData, id };
  return students[index];
};

const remove = (id) => {
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) return null;
  const deleted = students[index];
  students.splice(index, 1);
  return deleted;
};

module.exports = { getAll, getById, create, update, remove };
