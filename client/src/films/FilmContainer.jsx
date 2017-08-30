import React from 'react'
import { connect } from 'react-redux'
import FilmList from './FilmList'
import FilmItemForm from './FilmItemForm'
import * as FilmActions from './FilmActions'

import './Film.css'

class FilmContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      title: '',
      episodeId: '',
      openingCrawl: ''
    }
  }

  componentDidMount(){
    this.props.dispatch(FilmActions.fetchAll())
  }

  onCreateFilmItem(){
    const { title, episodeId, openingCrawl } = this.state

    if (!title || !episodeId || !openingCrawl)
      alert("Blank fields are not allowed!")
    else{
      this.props.dispatch(FilmActions.createOne({title, episodeId: parseInt(episodeId), openingCrawl}))
      this.clearState()
    }
  }

  clearState() {
    this.setState({
      title: '',
      episodeId: '',
      openingCrawl: ''
    })
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onDeleteFilmItem(filmId){
    this.props.dispatch(FilmActions.deleteOne(filmId))
  }

  onUpdateFilmItem(film){
    this.props.dispatch(FilmActions.updateOne(film))
  }

  render() {
    const { isFetching, didInvalidate, films } = this.props
    const { title, episodeId, openingCrawl } = this.state

    if (isFetching) 
      return <p>Loading...</p>
    else if (didInvalidate || !films) 
      return <p>Something wrong is not right :/</p>
    else
      return (
        <div>
          <FilmList 
          films={films} 
          onUpdateClick={(film) => this.onUpdateFilmItem(film)}
          onDeleteClick={(id) => this.onDeleteFilmItem(id)}/>
          <div className="film-item-new-mode">
            <h4>Create a new film!</h4>
            <FilmItemForm
              film={{title, episodeId: parseInt(episodeId), openingCrawl}}
              handleChange={(e) => this.handleChange(e)}
              onSubmitClick={(film) => this.onCreateFilmItem(film)}
              onResetClick={() => this.clearState()} />
          </div>
      </div>
      )

  }
}

const mapStateToProps = (state) => ({
  films: state.films.filmList, 
  isFetching: state.films.isFetching, 
  didInvalidate: state.films.didInvalidate
});

export default connect(mapStateToProps)(FilmContainer);