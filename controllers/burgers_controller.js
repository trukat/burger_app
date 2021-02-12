const connection = require("../config/connection.js");
const orm = require("../models/orm");

module.exports = {
  allBurgers: (req, res) => {
    orm.getAllBurgers((data) => {
      res.render("index", { burger_data: data });
    });
  },

  eatBurger: (req, res) => {
    orm.eatTheBurger(req.params.id, () => res.send("success"));
  },

  addBurger: (req, res) => {
    orm.addABurger(req.body.text, () => res.send("success"));
  },

  delBurger: (req, res) => {
    orm.deleteBurger(req.params.id, () => res.send("success"));
  },
};
