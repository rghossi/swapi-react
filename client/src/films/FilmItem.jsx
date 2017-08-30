import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import FilmItemForm from './FilmItemForm'

class FilmItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editMode: false,
      title: props.title,
      episodeId: props.episodeId,
      openingCrawl: props.openingCrawl
    }
  }

  componentWillReceiveProps(nextProps) {
    if ((nextProps.title !== this.props.title)
    || (nextProps.episodeId !== this.props.episodeId)
    || (nextProps.openingCrawl !== this.props.openingCrawl))
      this.setState({editMode: false})
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const { id, onUpdateClick, onDeleteClick } = this.props
    const { title, episodeId, openingCrawl } = this.state
    const wrapper = classNames({"flip-container": true, "film-item-wrapper": true, "flip": this.state.editMode})
    const stateFilm = { id, title, episodeId: parseInt(episodeId), openingCrawl }
    return (
      <div className={wrapper}>
        <div className="flipper">
          <div className="front film-item-show-mode" onClick={() => this.setState({editMode: true})}>
            <h3>{this.props.title}</h3>
            <h4>Episode {this.props.episodeId}</h4>
            {this.props.openingCrawl}
          </div>
          <div className="back film-item-edit-mode">
            <FilmItemForm 
              film={stateFilm} 
              handleChange={(e) => this.handleChange(e)}
              onSubmitClick={() => onUpdateClick(stateFilm)}
              onCancelClick={() => this.setState({editMode: false})}
              onDeleteClick={onDeleteClick} />
          </div>
        </div>
      </div>
    )
  }
}

FilmItem.propTypes = {
  onUpdateClick: PropTypes.func,
  onDeleteClick: PropTypes.func,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  episodeId: PropTypes.number.isRequired,
  openingCrawl: PropTypes.string.isRequired
}

export default FilmItem