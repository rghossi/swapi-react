import models from '../models'

const People = models.People

export const getAll = (req, res, next) => {
  People.findAll()
    .then(people => {
      res.json(people)
    })
    .catch(err => {
      console.error(err.stack)
    });
}

