import express from 'express'
import models from './models'
import rp from 'request-promise'
import cors from 'cors'
import bodyParser from 'body-parser'

import * as FilmsController from './controllers/films'
import * as PeopleController from './controllers/people'

import { fetchFilms, fetchPeople } from './scripts/importFromSwapi'

const isDevelopment = process.env.NODE_ENV === 'development'
const isTest = process.env.NODE_ENV === 'test'
 
const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser());
 
app.get('/films', cors(), FilmsController.getAll);
app.post('/films', cors(), FilmsController.createOne);
app.put('/film/:id', cors(), FilmsController.updateOne);
app.delete('/film/:id', cors(), FilmsController.deleteOne);

app.get('/people', cors(), PeopleController.getAll);

models.sequelize.sync({force: isDevelopment})
  .then(() => {
    fetchFilms();
    fetchPeople();
    app.listen(port, console.log(`Magic happens on PORT ${port}`));
    app.on('error', (err) => console.error(err.stack));
  });

export default app