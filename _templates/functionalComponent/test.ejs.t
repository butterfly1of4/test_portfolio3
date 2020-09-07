---
to: src/components/<%= name %>/<%= name %>.test.js
---

import React from 'react'
import { shallow, mount, configure } from 'enzyme'
import <%= name %> from './<%= name %>.js'
import Adapter from 'enzyme-adapter-react-16';
configure({adapter: new Adapter()});



  it('should render as expected', () => {
    const component = shallow(<<%= name %> />)
	 	expect(component.exists()).toBe(true);
  })
})
