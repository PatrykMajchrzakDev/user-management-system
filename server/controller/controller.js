var Userdb = require("../model/model");

//create and save new user
exports.create = (req, res) => {
  //validate request → if user make post w/o body then exit the method
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  //new user
  const user = new Userdb({
    name: req.body.name,
    email: req.body.email,
    gender: req.body.gender,
    status: req.body.status,
  });

  //save user in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating a create operation",
      });
    });
};

//retrive and return all users/ retrive and return a single user

exports.find = (req, res) => {
  Userdb.find()
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Error occured while retrieving user information",
      });
    });
};

//Update a new indentified user by user id

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be mepty" });
  }
  const id = req.params.id;
  Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update user with ${id}. Maybe user not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: `Error Update user information` });
    });
};

//Delete a user with specified user id in the request
exports.delete = (req, res) => {};