import express from 'express';
import mongoose from 'mongoose';

const app = express();

mongoose.connect('mongodb://localhost/vaccination');
const databaseConnection  = mongoose.connection;
databaseConnection.once('open', () => console.log('Connected'));
databaseConnection.on('error', error => console.log('Error:' + error))

app.use(express.static('dist/client'));

app.listen(4000, () => {
  console.log('listening');
});
