import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Contact from './Contact.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Contact component', () => {

  it('should render as expected', () => {
    const component = shallow(<Contact />)
	 	expect(component.exists()).toBe(true);
  })
})