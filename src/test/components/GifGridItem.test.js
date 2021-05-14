import React from 'react'
import { shallow } from "enzyme";
import GifGridItem from "../../components/GifGridItem";

describe('Test in <GifGridItem/>', () => {

    const title = 'Hola so el titulo'
    const url = 'https://localhost/Goku.jpg'
    const wrapper = shallow( <GifGridItem title={title} url={ url }/> )

    test('should render the component correctly', () => {

        expect( wrapper ).toMatchSnapshot();

    })

    test('it should have a paragraph with the title', () => {
        
        const p = wrapper.find('p');
        expect( p.text().trim()).toBe( title );

    })

    test('Must have an image equal to the url and alt of the props', () => {
        const img = wrapper.find('img');
        //console.log(img.props().src)
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );
    })
    
    test('Should have animate__bounce', () => {
        
        const div = wrapper.find('div');
        //console.log(div.hasClass('animate__bounce'));
        //const className = div.prop('className');

        expect( div.hasClass('animate__bounce') ).toBe(true);
        //expect( className.includes('animate__bounce') ).toBe( true );
    })
    

    
});
