const bcrypt = require("bcrypt");
const { userFacade } = require("../dependency/injection");
const { User } = require("../data/dbContext");
const jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const cpf = req.body.cpf;
  const phone = req.body.phone;
  const image_path = req.body.image_path
  const born_date = req.body.born_date

  bcrypt
    .hash(password, 12)
    .then((newPassword) => {
      userFacade.add({ name: name, email: email, password: newPassword, cpf: cpf,  phone: phone, image_path: image_path, born_date: born_date});
    })
    .then((result) => {
      res.status(201).json({ result: "Usuário cadastrado com sucesso", token: jwt });
    })
    .catch((err) => {
      res.status(500);
    });
    
};
exports.login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  userFacade
    .login(email, password)
    .then((token) => {
      res.status(200).json({ token: token });
    })
    .catch((error) => {
      res.status(401).json({ error: error.message });
    });
};
