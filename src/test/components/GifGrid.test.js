import { shallow } from "enzyme";
import GifGrid from "../../components/GifGrid";
import {useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");


describe('Test in componente <GifGrid/>', () => {

    const category = 'Genos';

    test('should render correctly', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true 
        })
        
        const wrapper = shallow( <GifGrid category={ category }/> )
        expect( wrapper ).toMatchSnapshot();

    })

    test('should show items when load images useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            title: "Cualquier Cosa",
            url: "https://localhost/goku.jpg"
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false 
        })

        const wrapper = shallow( <GifGrid category={ category }/> )
        expect( wrapper ).toMatchSnapshot();
    })
    
    
});
