import React from 'react'
import { shallow, mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import FilmContainer from './FilmContainer'
import FilmItemForm from './FilmItemForm'
import FilmList from './FilmList'
import FilmItem from './FilmItem'

import { requestFilms, receiveFilms } from './FilmActions'

describe('FilmContainer',()=>{
  const initialState = { films: { filmList: []} }
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares)
  let store,container, wrapper

  describe('Shallow rendering', () => {
    beforeEach(()=>{
      store = mockStore(initialState)
      container = shallow(<FilmContainer store={store} /> )  
    })

    it('renders the container component', () => {
     expect(container.length).toEqual(1)
    });

    it('props matches initialState', () => {
      expect(container.prop('films')).toEqual(initialState.films.filmList)
    });

    it('component state should start empty', () => {
      expect(container.state()).toEqual({})
    });
  })

  describe('Full DOM rendering', () => {
    beforeEach(()=>{
      store = mockStore(initialState)
      wrapper = mount(<Provider store={store}><FilmContainer /></Provider>)  
    })

    it('renders the container component', () => {
     expect(wrapper.find(FilmContainer).length).toEqual(1)
    });

    it('renders FilmItemForm component', () => {
      expect(wrapper.find(FilmItemForm).length).toEqual(1)
    });

    it('renders FilmList component', () => {
      expect(wrapper.find(FilmList).length).toEqual(1)
    });

    it('fetch films and render FilmItens components', () => { 
      let action
      const films = [
        {
          id: 1,
          title: 'Teste 1',
          episodeId: 1,
          openingCrawl: 'tala'
        },
        {
          id: 2,
          title: 'Teste 2',
          episodeId: 2,
          openingCrawl: 'tala2'
        }
      ]

      store.dispatch(requestFilms())
      store.dispatch(receiveFilms(films))

      action = store.getActions()
      expect(action[1].type).toBe('REQUEST_FILMS')
      expect(action[2].type).toBe('RECEIVE_FILMS')
    });
  })
});