const { use } = require("../routes/v1/randomUser.route");
let users = require("../users.json");
module.exports.getAllUsers = (req, res) => {
  res.send(users);
};
module.exports.getRandomUser = (req, res) => {
  const user = users[Math.floor(Math.random() * users.length)];
  res.json(user);
};
module.exports.saveAUser = (req, res) => {
  users.push(req.body);
  res.json(users);
};
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
module.exports.deleteAUser = (req, res) => {
  const { id } = req.params;
  console.log(id);
  users = users.filter((user) => user.id !== Number(id));
  console.log(users);
  res.send(users);
};
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

  // const ids = [];
  // for (let x of data) {
  //   ids.push(x.id);
  //   // const finding = users?.find((user) => user?.id == Number(x?.id));
  //   // finding.contact = x?.contact;
  //   // res.send(finding);
  // }
  // // console.log(ids);
  // // let founded;
  // let numb;
  // ids.forEach((element) => {
  //   numb = element;
  //   console.log(element);
  //   // let finding = users.find((user) => user.id == Number(element));
  //   // console.log(finding);
  //   // founded = finding;
  // });
  // console.log(numb);

  // console.log(founded.contact);
  // res.json(founded);
  // console.log(data.id);
};
