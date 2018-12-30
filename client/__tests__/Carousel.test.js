import React from 'react';
import { Enzyme, shallow, mount } from 'enzyme';
import Carousel from '../src/components/Carousel.jsx';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

jest.mock('axios');

describe('<Carousel />', () => {

  it('renders a single Carousel component', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toHaveLength(1);
  });

  it('Should call componentDidMount', () => {
    const spy = jest.spyOn(Carousel.prototype, 'getPhotos');
    const wrapper = shallow(<Carousel />);
    expect(spy).toHaveBeenCalled();
  });

  it('Makes an API request and updates state on success', () => {
    const spy = jest.spyOn(Carousel.prototype, 'getPhotos');
    const wrapper = shallow(<Carousel />);

    const mockData = [{ _id: 0, name: 'The Saratoga', userPhotos: [{ example: 1 }] }];
    const mock = new MockAdapter(axios);
    mock
      .onGet('/photos/restaurants/')
      .reply(200, mockData);

    console.log(wrapper.debug(), 'Carousel component in API test')
  })

  it('Makes an API request and populates an error if the request fails', () => {
    //Use mount in airbnb docs (no shallow, or render)
    //Render will provide with HTML only
    // const response = { data: [{ _id: 0, name: 'The Saratoga' }] };
  });

  it('Makes an API request and updates state on success', async () => {

  });

  it('Passes down props to RestaurantList component', () => {

  });
});
