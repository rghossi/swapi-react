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

export const deleteOne = (req, res, next) => {
  Film.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(rowDeleted => {
      if (rowDeleted === 1){
        res.json({status: "Deleted succesfully"})
      }
    })
    .catch(err => {
      console.error(err.stack)
    });
}

