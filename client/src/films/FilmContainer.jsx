import React from 'react'
import { connect } from 'react-redux'
import FilmList from './FilmList'
import * as FilmActions from './FilmActions'

class FilmContainer extends React.Component {
  componentDidMount(){
    this.props.dispatch(FilmActions.fetchAll())
  }

  onDeleteFilmItem(filmId){
    this.props.dispatch(FilmActions.deleteOne(filmId))
  }

  onUpdateFilmItem(film){
    this.props.dispatch(FilmActions.updateOne(film))
  }

  render() {
    const { isFetching, didInvalidate, films } = this.props

    if (isFetching) 
      return <p>Loading...</p>
    else if (didInvalidate || !films) 
      return <p>Something wrong is not right :/</p>
    else
      return <FilmList 
        films={films} 
        onUpdateClick={(film) => this.onUpdateFilmItem(film)}
        onDeleteClick={(id) => this.onDeleteFilmItem(id)}/>

  }
}

const mapStateToProps = (state) => ({
  films: state.films.filmList, 
  isFetching: state.films.isFetching, 
  didInvalidate: state.films.didInvalidate
});

export default connect(mapStateToProps)(FilmContainer);