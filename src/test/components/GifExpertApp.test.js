import React from 'react'
import { shallow } from "enzyme";
import GifExpertApp from "../../components/GifExpertApp";


describe('Test in component GifExpertApp', () => {
    test('should render the component correctly', () => {
        let wrapper = shallow( <GifExpertApp/> )
        expect(wrapper).toMatchSnapshot()
    })
    
});
