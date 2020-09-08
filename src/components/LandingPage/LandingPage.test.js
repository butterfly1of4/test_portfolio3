import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import LandingPage from './LandingPage.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('LandingPage component', () => {

  it('should render as expected', () => {
    const component = shallow(<LandingPage />)
	 	expect(component.exists()).toBe(true);
  })
})