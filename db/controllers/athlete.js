const Athlete = require('../models/athlete.js');

const createAthlete = (id, name, raceDate, callback) => {
  const newAthlete = new Athlete({id, name, raceDate});
  newAthlete.save(function(err, succ) {
    if (err) return callback(err);
    callback(succ);
  });
}

const findAthlete = (id, callback) => {
  Athlete.find({id}, function (err, docs) {
    if (err) {
      throw err
    } else {
      callback(docs)
    };
  });
}

const updateAthlete = (id, name, raceDate, callback) => {
  Athlete.countDocuments({ id }, function (err, count) {
    if (err) throw err;
    if (count) {
      Athlete.findOneAndUpdate({id}, {name, raceDate}, (err, succ) => {
        console.log(succ)
        if (err) throw err;
        callback(succ)
      })
    } else {
      createAthlete(id, name, raceDate, callback);
    };
  });
}

const deleteAthlete = (id, callback) => {
  Athlete.findOneAndRemove({ id }, function (err, succ) {
    if (err) throw err;
    return callback(succ);
  })
}

module.exports = {
  createAthlete,
  findAthlete,
  updateAthlete,
  deleteAthlete
}