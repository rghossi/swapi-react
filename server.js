import express from 'express'
import models from './models'
import rp from 'request-promise'
import cors from 'cors'

import * as FilmsController from './controllers/films'
import * as PeopleController from './controllers/people'

import { fetchFilms, fetchPeople } from './scripts/importFromSwapi'
 
const app = express();
const port = process.env.PORT || 3001;
 
app.get('/films', cors(), FilmsController.getAll);
app.get('/people', cors(), PeopleController.getAll);


models.sequelize.sync({force: true})
  .then(() => {
    fetchFilms();
    fetchPeople();
    app.listen(port, console.log(`Magic happens on PORT ${port}`));
    app.on('error', (err) => console.error(err.stack));
  });