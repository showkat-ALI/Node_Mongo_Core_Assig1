const { use } = require("../routes/v1/randomUser.route");
let users = require("../users.json");
module.exports.getAllUsers = (req, res) => {
  res.send(users);
};
//get Random User
module.exports.getRandomUser = (req, res) => {
  const user = users[Math.floor(Math.random() * users.length)];
  res.json(user);
};
//Save a  User

module.exports.saveAUser = (req, res) => {
  users.push(req.body);
  res.json(users);
};
//Update a User

module.exports.updateAuser = (req, res, next) => {
  const { id } = req.params;
  const newData = users.find((user) => user.id == Number(id));
  console.log(newData);
  newData.id = id;
  newData.name = req.body.name;
  newData.address = req.body.address;
  newData.contact = req.body.address;
  newData.gender = req.body.gender;
  newData.photoUrl = req.body.photoUrl;
  res.send(newData);
  next();
};
//Delete a random User

module.exports.deleteAUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  users = users.filter((user) => user.id !== Number(id));
  console.log(users);
  res.send(users);
};
//Bulk Update means updating Multiple user

module.exports.bulkUpdate = (req, res, next) => {
  const data = req.body;
  console.log(data);
  const newData = Object.values(data);
  console.log(newData);
  const bulkUpdated = newData.map((data) => {
    const user = users.find((user) => user.id == Number(data.id));
    user.name = data.name;
    return user;
  });
  res.send(bulkUpdated);
};
