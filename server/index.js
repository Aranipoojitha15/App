const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const EmployeeModel = require('./models/Employee');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/employee", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.error("Could not connect to MongoDB", err));

// Route to handle registration
app.post('/register', (req, res) => {
  EmployeeModel.create(req.body)
    .then(employee => res.json(employee))
    .catch(err => res.status(400).json(err));
});

// Route to handle login
app.post("/login", (req, res) => {
  const { email, password } = req.body; // Destructure req.body correctly
  EmployeeModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) { // Fixed syntax here
          res.json("Success");
        } else {
          res.json("The password is incorrect");
        }
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => res.status(400).json(err));
});

// Start the server
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
