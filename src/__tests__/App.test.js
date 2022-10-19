import React from "react";
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import App from '../App';
import Counter from '../components/Counter'

let wrapper 

beforeEach(() => {
  wrapper = shallow(<App />);
});

it('should match the snapshot', () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

it('has render <Counter /> component', () => {
  expect(wrapper.find(Counter)).toHaveLength(1);
});
