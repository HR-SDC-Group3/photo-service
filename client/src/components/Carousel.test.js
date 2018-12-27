import React from 'react';
import { Enzyme, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';
// import App from '../App.jsx';

describe('<CarouselContainer />', () => {
  it('Renders a Carousel container component instance', () => {
    const carousel = shallow(<CarouselContainer />);
    expect(carousel.to.)
  });
  it('Should render user photos as children', () => {

  });
  it('Should pass down handler functions from Carousel parent to it\'ts children', () => {

  });
  it('should be clickeable', () => {

  });

  it('Should have photo modal functionality', () => {

  });

});


// describe('<CarouselContainer />', () => {
//   it('Renders a <CarouselContainer /> component instance', () => {
//     const carousel = shallow(<CarouselContainer />);
//   });

//   expect(carousel).to.exist;
// });



// describe('<MyComponent />', () => {
//   it('Renders three <Foo /> components', () => {
//     const wrapper = shallow(<MyComponent />);
//     expect(wrapper.find(Foo)).to.have.lengthOf(3);
//   });

//   it('renders an `.icon-star`', () => {
//     const wrapper = shallow(<MyComponent />);
//     expect(wrapper.find(Foo)).to.have.lengthOf(3);
//   })

//   it('renders children when passed in', () => {
//     const wrapper = shallow((
//       <MyComponent>
//         <div clasName="unique" />
//       </MyComponent>
//     ));
//     expect(wrapper.contains(<div className="unique" />)).to.equal(true);
//   });

//   it('stimulates click events', () => {
//     const onButtonClick = sinon.spy();
//     const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
//     wrapper.find('button').stimulate('click');
//     expect(onButtonClick).to.have.property('callCount', 1);
//   })
// });
