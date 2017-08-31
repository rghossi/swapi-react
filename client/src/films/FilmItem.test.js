import React from 'react'
import { shallow, mount } from 'enzyme'

import FilmItem from './FilmItem'

describe('FilmItem',()=>{
  let container
  const film = {
    id:1,
    episodeId: 1,
    title: "Test",
    openingCrawl: "blabla"
  }

  describe('Shallow rendering', () => {
    beforeEach(()=>{
      container = shallow(<FilmItem {...film} />)
    })

    it('renders the container component', () => {
     expect(container.length).toEqual(1)
    });
  })

  describe('Mount rendering', () => {
    beforeEach(()=>{
      container = mount(<FilmItem {...film} />)
    })

    it('props matches film properties', () => {
      expect(container.prop('id')).toEqual(film.id)
      expect(container.prop('episodeId')).toEqual(film.episodeId)
      expect(container.prop('title')).toEqual(film.title)
      expect(container.prop('openingCrawl')).toEqual(film.openingCrawl)
    });

    it('renders flipper classes correctly', () => {
      expect(container.find('.flipper').length).toEqual(1)
      expect(container.find('.front').length).toEqual(1)
      expect(container.find('.back').length).toEqual(1)
    });

    it('display correct film info', () => {
      expect(container.find('.film-item-show-mode > h3').text()).toEqual(film.title)
      expect(container.find('.film-item-show-mode > h4').text()).toEqual('Episode ' + film.episodeId)
    });
  })
});