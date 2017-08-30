import { combineReducers } from 'redux'
import films from './films/FilmReducer'

const appReducer = combineReducers({
  films,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default rootReducer