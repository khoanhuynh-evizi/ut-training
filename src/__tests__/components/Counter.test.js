import React from "react";
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Counter from '../../components/Counter'

let wrapper 

beforeEach(() => {
  wrapper = shallow(<Counter />);
  jest.spyOn(global.Math, 'random').mockReturnValue(0.2308);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
})


it('should match the snapshot', () => {
  expect(shallowToJson(wrapper)).toMatchSnapshot();
});

describe('renders without error', () => {
  it("renders correct", () => {
    expect(wrapper.find('.counter')).toHaveLength(1);
  });

  it("renders buttons", () => {
    expect(wrapper.find('.decrement')).toHaveLength(1);
    expect(wrapper.find('.reset')).toHaveLength(1);
    expect(wrapper.find('.increment')).toHaveLength(1);
  });
  
  it("renders counter is zero", () => {
    expect(wrapper.find('h2').text()).toBe("0")
  });
})

describe("Increment", () => {
  it("click increment button", () => {
    const wrapper = shallow(<Counter />);

    const increment = wrapper.find('.increment');
    increment.simulate('click');

    expect(wrapper.find('h2').text()).toBe("1")
  });
});


describe("Decrement", () => {
  it("click decrement button", () => {
    const wrapper = shallow(<Counter />);

    const decrement = wrapper.find('.decrement');
    decrement.simulate('click');

    expect(wrapper.find('h2').text()).toBe("-1")
  });
});


describe("Reset", () => {
  it("click reset button", () => {
    const wrapper = shallow(<Counter />);

    const decrement = wrapper.find('.decrement');
    decrement.simulate('click');

    expect(wrapper.find('h2').text()).toBe("-1")

    const reset = wrapper.find('.reset');
    reset.simulate('click');

    expect(wrapper.find('h2').text()).toBe("0")

  });
});


describe("Random", () => {
  it("click random button", () => {
    const wrapper = shallow(<Counter />);

    const decrement = wrapper.find('.decrement');
    decrement.simulate('click');

    expect(wrapper.find('h2').text()).toBe("-1")

    const reset = wrapper.find('.random');
    reset.simulate('click');

    expect(wrapper.find('h2').text()).toBe("23")

  });
});
