import Mongoose from 'mongoose';

const Schema = Mongoose.Schema;

const VaccineSchema = new Schema({
  title: String,
  description: String,
  doseType: Number
}, {collection: 'vaccine'});

const Vaccine = Mongoose.model('vaccine', VaccineSchema);

export default Vaccine;