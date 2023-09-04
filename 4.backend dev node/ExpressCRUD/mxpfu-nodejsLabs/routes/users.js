const express = require("express");
const router = express.Router();

let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // Copy the code here
  res.send(users);
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  let mail = req.params.email;
  let user = users.filter((user) => user.email === mail);
  res.send(user);
});

// POST request: Create a new user
router.post("/", (req, res) => {
  // Copy the code here
  let first = req.query.firstName;
  let last = req.query.lastName;
  let email = req.query.email;
  let dob = req.query.DOB;

  let new_user = {
    firstName: first,
    lastName: last,
    email: email,
    DOB: dob,
  };

  users.push(new_user);
  res.send(`User ${first} added Successfully!`);
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  let mail = req.params.email;
  let other_users = users.filter((user) => user.email !== mail);
  let user = users.filter((user) => user.email === mail);

  if (user.length > 0) {
    let first = req.query.firstName;
    let last = req.query.lastName;
    let email = req.query.email;
    let dob = req.query.DOB;

    res.send(first, last, email, dob);

    user.firstName = first;
    user.lastName = last;
    user.email = email;
    user.DOB = dob;

    users.push(other_users);
    users.push(user);

    res.send(`User ${first} has been Updated! New Details are ${user}`);
  } else {
    res.send("User Not Found!");
  }
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
});

module.exports = router;
