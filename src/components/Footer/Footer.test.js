import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Footer from './Footer.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Footer component', () => {

  it('should render as expected', () => {
    const component = shallow(<Footer />)
	 	expect(component.exists()).toBe(true);
  })
})