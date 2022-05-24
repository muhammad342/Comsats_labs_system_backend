const bcrypt = require("bcryptjs");

const users = [
  {
    name: "Admin user",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "03134848493",
    role: "admin",
  },
  {
    name: "Lab User",
    email: "staff@example.com",
    password: bcrypt.hashSync("123456", 10),
    phone: "03134848493",
    role: "labstaff",
  },
  {
    name: "DCO User",
    email: "dco@example.com",
    phone: "03134848493",
    password: bcrypt.hashSync("123456", 10),
    role: "dco",
  },
  {
    name: "Committee User",
    email: "committe@example.com",
    phone: "03134848493",
    password: bcrypt.hashSync("123456", 10),
    role: "committe",
  },
  {
    name: "Teacher User",
    email: "teacher@example.com",
    phone: "03134848493",
    password: bcrypt.hashSync("123456", 10),
    role: "teacher",
  },
  {
    name: "Hod User",
    email: "hod@example.com",
    phone: "03134848493",
    password: bcrypt.hashSync("123456", 10),
    role: "hod",
  },
  {
    name: "Works User",
    email: "works@example.com",
    phone: "03134848493",
    password: bcrypt.hashSync("123456", 10),
    role: "works",
  },
];

module.exports = users;
