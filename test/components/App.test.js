import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';

import App from '../../src/components/App';

describe('App Component', () => {

  it('+++ should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(<App />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  })

  it('+++ should compare the text h1 in portugues.', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('h1').render().text()).toEqual('Hello, Electron!');
  })

})
