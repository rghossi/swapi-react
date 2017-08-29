import express from 'express'
import models from './models'
import rp from 'request-promise'

import * as FilmsController from './controllers/films'
import * as PeopleController from './controllers/people'

import { fetchFilms, fetchPeople } from './scripts/importFromSwapi'
 
const app = express();
const port = process.env.PORT || 3000;
 
app.get('/films', FilmsController.getAll);
app.get('/people', PeopleController.getAll);


models.sequelize.sync()
  .then(() => {
    fetchFilms();
    fetchPeople();
    app.listen(port, console.log(`Magic happens on PORT ${port}`));
    app.on('error', (err) => console.error(err.stack));
  });