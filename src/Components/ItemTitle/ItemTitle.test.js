import React from "react";
import ItemTitle from "./ItemTitle";
import { shallow } from 'enzyme'

describe("Title Component should render properly", () => {
 
  it('should render Title component with props', () => {
    const component = shallow(<ItemTitle name={'Test'}/>)
    expect(component).toMatchSnapshot()
})

it('should render Title component without props', () => {
    const component = shallow(<ItemTitle/>)
    expect(component).toMatchSnapshot()
})
});
