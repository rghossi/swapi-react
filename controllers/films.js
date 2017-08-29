import models from '../models'

const Film = models.Film

export const getAll = (req, res, next) => {
  Film.findAll()
    .then(films => {
      res.json(films)
    })
    .catch(err => {
      console.error(err.stack)
    });
}

