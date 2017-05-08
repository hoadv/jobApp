module.exports = function (app) {
  // grab the todo model we just created
  var Users = require('../models/user');

  app.post('/api/auth', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;

    Users.findOne({ 'username': username, 'password': password }, 'username type',function (err, data) {
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });

  });

  app.post('/api/create', function (req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var type = req.body.usertype;
    var formuser = {
      username: req.body.username,
      password: req.body.password,
      type: type
    };

    let newtodo = new Users(formuser);
    try {
      newtodo.save();
    } catch (ex) {
      console.log(ex);
      throw ex;
    }
  });
};