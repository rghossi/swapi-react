import models from '../models'
import rp from 'request-promise'

const fetchDataFromSwapi = (uri, createFunc) => {
  const options = {
      uri: uri,
      headers: {
        'User-Agent': 'Request-Promise'
      },
      json: true
  };
  rp(options)
    .then(function (json) {
      json.results.forEach(createFunc)
    })
    .catch(function (err) {
      console.error(err)
    });
}

export const fetchFilms = () => fetchDataFromSwapi('https://swapi.co/api/films', (film) => {
  models.Film.create({
    title: film.title,
    episodeId: film.episode_id,
    openingCrawl: film.opening_crawl
  })
})

export const fetchPeople = () => fetchDataFromSwapi('https://swapi.co/api/people', (person) => {
  models.People.create({
    name: person.name,
    birthYear: person.birth_year,
    gender: person.gender
  })
})