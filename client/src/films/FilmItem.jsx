import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import './FilmItem.css'

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
            <form>
              <input value={title} name="title" type="text" onChange={(e) => this.handleChange(e)}></input>
              <input value={episodeId} name="episodeId" type="number" onChange={(e) => this.handleChange(e)}></input>
              <textarea value={openingCrawl} name="openingCrawl" type="text" onChange={(e) => this.handleChange(e)}></textarea>
              <button type="button" className="submit-btn" onClick={(film) => onUpdateClick(stateFilm)}>Submit</button>
              <button type="button" className="cancel-btn" onClick={() => this.setState({editMode: false})}>Cancel</button>
              <button type="button" className="delete-btn" onClick={onDeleteClick}>Delete</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

FilmItem.propTypes = {
  onUpdateClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  episodeId: PropTypes.number.isRequired,
  openingCrawl: PropTypes.string.isRequired
}

export default FilmItem