import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import Languages from './Languages.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});


describe('Languages component', () => {

  it('should render as expected', () => {
    const component = shallow(<Languages />)
	 	expect(component.exists()).toBe(true);
  })
})