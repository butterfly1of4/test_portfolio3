import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import About from './About.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('About component', () => {

  it('should render as expected', () => {
    const component = shallow(<About />)
	 	expect(component.exists()).toBe(true);
  })
})