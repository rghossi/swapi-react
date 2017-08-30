let Film = require('../models').Film

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server').default
let should = chai.should()

chai.use(chaiHttp);

describe('Films', () => {
  beforeEach((done) => {
    Film.destroy({where: {}})
      .then((res) => done())
  });

  describe('/GET films', () => {
    it('it should GET all films', (done) => {
      chai.request(server)
        .get('/films')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('array');
          res.body.length.should.be.eql(0);
          done();
        });
    });
  });

  describe('/POST films', () => {
    it('it should POST a film', (done) => {
      chai.request(server)
        .post('/films')
        .send({film: {title: 'Test', episodeId: 4, openingCrawl: 'bla'}})
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.film.should.be.a('object');
          res.body.film.title.should.equals('Test');
          done();
        });
    });
  });

  describe('/PUT film/:id', () => {
    it('it should UPDATE an existing film', (done) => {
      Film.create({title: 'Test', episodeId: 4, openingCrawl: 'bla'})
        .then(film => {
          chai.request(server)
            .put(`/film/${film.id}`)
            .send({film: {title: 'Test 2', episodeId: 5, openingCrawl: 'bla2'}})
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.status.should.equals("Updated succesfully");
              done();
            });   
        })
    });
  });

  describe('/DELETE film/:id', () => {
    it('it should DELETE an existing film', (done) => {
      Film.create({title: 'Test', episodeId: 4, openingCrawl: 'bla'})
        .then(film => {
          chai.request(server)
            .delete(`/film/${film.id}`)
            .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('object');
              res.body.status.should.equals("Deleted succesfully");
              done();
            });   
        })
    });
  });
});