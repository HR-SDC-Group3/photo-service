import React from 'react';
import { Enzyme, shallow, mount } from 'enzyme';
import Carousel from '../src/components/Carousel.jsx';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import testFunctions from '../__mocks__/testFunctions.js'

describe('<Carousel />', () => {

  it('renders a single Carousel component', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper).toHaveLength(1);
  });

  it('Makes an API request', async () => {
    const apiData = await testFunctions.axiosGet();
    expect(apiData.name).toEqual('Leanne Graham');
  })

  it('Makes an API request and populates an error if the request fails', async () => {
    const apiData = await testFunctions.axiosGetError();
    expect(apiData).toEqual('Error!');
  });

  // it('Passes down props to RestaurantList component', () => {

  // });
});