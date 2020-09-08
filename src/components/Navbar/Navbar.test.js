import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Navbar from './Navbar.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Navbar component', () => {

  it('should render as expected', () => {
    const component = shallow(<Navbar />)
	 	expect(component.exists()).toBe(true);
  })
})