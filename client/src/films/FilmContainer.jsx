import React from 'react';
import { connect } from 'react-redux';
import FilmList from './FilmList';
import * as FilmActions from './FilmActions';

class FilmContainer extends React.Component {
  componentDidMount(){
    this.props.dispatch(FilmActions.fetchAll())
  }

  render() {
    return (
      <div>
        <p>Films</p>
        <p>{this.props.films}</p>
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