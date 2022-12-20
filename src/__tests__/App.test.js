import React from "react";
import { mount } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import App from '../App';
import Counter from '../components/Counter'
import { JSDOM } from 'jsdom'

const { window } = new JSDOM()
const { document } = window

let wrapper 

global.window = window;
global.document = document;

beforeEach(() => {
  wrapper = mount(<App />);
});

it('should match the snapshot', () => {
  expect(mountToJson(wrapper)).toMatchSnapshot();
});

it('has render <Counter /> component', () => {
  expect(wrapper.find(Counter)).toHaveLength(1);
});
