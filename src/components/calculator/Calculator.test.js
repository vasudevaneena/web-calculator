import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure,  mount } from "enzyme";
import Calculator from "./Calculator";

configure({ adapter: new Adapter() });
let wrapper;
beforeEach(() => {
  wrapper = mount(<Calculator />);
});
describe("component rendering", () => {
  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });
  it("should render one <Button>", () => {
    expect(wrapper.find("Button")).toHaveLength(19);
  });
  it("should render one <ScientificButton>", () => {
    expect(wrapper.find("ScientificButton")).toHaveLength(16);
  });

  it("should render 1 <button>", () => {
    expect(wrapper.find("button")).toHaveLength(1);
  });
});

describe("Calculator display content test", () => {
  wrapper = mount(<Calculator />);
  wrapper.update();
  it("click button two -> should display 2 in display area", async () => {
    wrapper.find("#test-two").simulate("click");
    expect(wrapper.find("#test-display").props().children[2]).toEqual("2");
  });
  it("click operator + ", async () => {
    wrapper.find("#test-plus").simulate("click");
    expect(wrapper.find("#test-display").props().children[1]).toEqual("+");
  });

  it("click three", async () => {
    wrapper.find("#test-three").simulate("click");
    expect(wrapper.find("#test-display").props().children[2]).toEqual("3");
  });
});

describe("Calculator Addition functionalty test", () => {
  wrapper = mount(<Calculator />);
  wrapper.update();
  it("2 + 3 = 5", async () => {
    wrapper.find("#test-two").simulate("click");
    wrapper.find("#test-plus").simulate("click");
    wrapper.find("#test-three").simulate("click");
    wrapper.find("#test-equal").simulate("click");
    expect(wrapper.find("#test-display").props().children[2]).toEqual("5");
  });
});

describe("Calculator Minus functionalty test", () => {
  wrapper = mount(<Calculator />);
  wrapper.update();
  it("9 - 7 = 2", async () => {
    wrapper.find("#test-nine").simulate("click");
    wrapper.find("#test-minus").simulate("click");
    wrapper.find("#test-seven").simulate("click");
    wrapper.find("#test-equal").simulate("click");
    expect(wrapper.find("#test-display").props().children[2]).toEqual("2");
  });
});

describe("Calculator multiply functionalty test", () => {
  wrapper = mount(<Calculator />);
  wrapper.update();
  it("8 * 7 = 56", async () => {
    wrapper.find("#test-eight").simulate("click");
    wrapper.find("#test-multiply").simulate("click");
    wrapper.find("#test-seven").simulate("click");
    wrapper.find("#test-equal").simulate("click");
    expect(wrapper.find("#test-display").props().children[2]).toEqual("56");
  });
});

describe("Calculator division functionalty test", () => {
  wrapper = mount(<Calculator />);
  wrapper.update();
  it("9 / 3 = 3", async () => {
    wrapper.find("#test-nine").simulate("click");
    wrapper.find("#test-division").simulate("click");
    wrapper.find("#test-three").simulate("click");
    wrapper.find("#test-equal").simulate("click");
    expect(wrapper.find("#test-display").props().children[2]).toEqual("3");
  });
});

describe("Calculator modulus functionalty test", () => {
  wrapper = mount(<Calculator />);
  wrapper.update();
  it("7 % 3 = 0.073", async () => {
    wrapper.find("#test-seven").simulate("click");
    wrapper.find("#test-modulus").simulate("click");
    wrapper.find("#test-three").simulate("click");
    wrapper.find("#test-equal").simulate("click");
    expect(wrapper.find("#test-display").props().children[2]).toEqual("0.073");
  });
});

describe("clear the display", () => {
  wrapper = mount(<Calculator />);
  wrapper.update();
  it("reset", async () => {
    wrapper.find("#test-seven").simulate("click");
    wrapper.find("#test-modulus").simulate("click");
    wrapper.find("#test-three").simulate("click");
    wrapper.find("#test-ac").simulate("click");
    expect(wrapper.find("#test-display").props().children[2]).toEqual("0");
  });
});
