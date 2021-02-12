const connection = require('../config/connection.js');

module.exports = {
    // get all burgers:
    getAllBurgers: (cb) => {
        connection.query('SELECT * FROM burgers', (err, data) => {
            if (err) {
              res.status(500).json({ msg: 'I messed up' });
            }
            cb(data);
          });
    },

    eatTheBurger: (id, cb) => {
    //updates database when burger is devoured
        connection.query(
            'UPDATE burgers SET devoured=true WHERE id = ?',
            [id],
            (err) => {
              if (err) throw err;
              cb()
            });
    },

    addABurger: (text, cb) => {
    // adds burger to database
        connection.query(
            'INSERT INTO burgers (burger_name) VALUES (?)',
            [text],
            (err) => {
              if (err) throw err;
              cb();
            });
    },

    deleteBurger: (id, cb) => {
    // deletes burger from database
        connection.query(
            'DELETE FROM burgers WHERE id = ?;',
            [id],
            (err) => {
              if (err) throw err;
              cb();
            });
    }
};