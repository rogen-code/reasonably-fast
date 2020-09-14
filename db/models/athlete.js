const mongoose = require('mongoose');
const { Schema } = mongoose;

const athleteSchema = new mongoose.Schema({ id: Number, name: String, raceDate: String });
const Athlete = mongoose.model('Athlete', athleteSchema);

module.exports = Athlete;

