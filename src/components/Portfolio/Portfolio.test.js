import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Portfolio from './Portfolio.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Portfolio component', () => {

  it('should render as expected', () => {
    const component = shallow(<Portfolio />)
	 	expect(component.exists()).toBe(true);
  })
})