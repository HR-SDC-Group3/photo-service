import React from 'react';
import { Enzyme, shallow, mount } from 'enzyme';
import RestaurantPhotos from '../src/components/RestaurantPhotos.jsx';

describe('<RestaurantPhotos />', () => {

  it('Should initially render a loading screen', () => {
    const wrapper = shallow(<RestaurantPhotos isLoading={false} />)
    expect(wrapper.find('h1').text()).toBe('Loading...');
  });

  it('Should display photos if loading screen is not present', () => {
    const wrapper = shallow(<RestaurantPhotos isLoading={true} />);
    expect(wrapper.find('img')).to
  })

  it('Should have isLoading and photos as it\'s props', () => {
  })

  it('Should receive a handler function from Carousel parent', () => {
    const wrapper = shallow(<RestaurantPhotos />);
    expect(wrapper.instance().props.photos).toBe(true);
  });

  it('should open a photo Modal window when clicked on', () => {

  })


});