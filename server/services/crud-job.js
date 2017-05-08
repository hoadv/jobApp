module.exports = function (app) {
  // grab the todo model we just created
  var Jobs = require('../models/job');

  // server routes ===========================================================
  // handle things like api calls
  // authentication routes

  // SHOW
  app.get('/api/jobs', function (req, res) {
    console.log('/api/jobs');
    // use mongoose to get all jobs in the database
    Jobs.find({}, 'jobTitle description logo', function (err, data) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.send(err);

      res.json(data); // return all jobs in JSON format
    });
  });

  // get all items from mongodb
  app.get('/api/jobs/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);
    Jobs.findById(id, function (err, data) {
      console.log(data);
      if (err) {
        res.send(err);
      } else {
        res.json(data);
      }
    });

  });


  // CREATE
  app.post('/api/jobs', function (req, res) {
    console.log('begin /api/jobs');
    var formJob = {
    };

    Object.keys(req.body).map((key) => {
      formJob[key] = req.body[key];
    })

    console.log('/api/jobs');
    console.log(formJob);
    let job = new Jobs(formJob);
    try {
      job.save();
    } catch (ex) {
      throw ex;
    }
  });
};