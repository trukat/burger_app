const express = require('express');
const connection = require('../config/connection.js');
const router = express.Router();

router.get('/', (req, res) => {
  connection.query('SELECT * FROM burgers', (err, data) => {
    if (err) {
      res.status(500).json({ msg: 'I messed up' });
    }
    res.render('index', { burger_data: data });
  });
});

router.put('/devour/:id', (req, res) => {
  connection.query(
    'UPDATE burgers SET devoured=true WHERE id = ?',
    [req.params.id],
    (err) => {
      if (err) throw err;
      res.send('success');
    }
  );
});

module.exports = router;
