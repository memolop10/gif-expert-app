import { shallow } from "enzyme";
import AddCategory from "../../components/AddCategory";


describe(' Test in <AddCategory/> ', () => {

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={ setCategories } /> )

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={ setCategories } /> )
    })

    test('should render correctly', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('should change the input', () => {
        
        const input = wrapper.find('input');
        const value = 'Hola Mundo'

        input.simulate('change', { target: { value } });

        expect(wrapper.find('p').text().trim()).toBe( value )

    })
    
    test('should not post the information with submit', () => {
        
        wrapper.find('form').simulate('submit',{ preventDefault(){} })

        expect( setCategories ).not.toHaveBeenCalled();
    })

    test('should call setCategories and clear text box', () => {
        
        const input = wrapper.find('input');
        const value = 'Soy Goku';
        
        input.simulate('change', { target: { value } } )

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategories ).toHaveBeenCalled();
        expect( setCategories ).toHaveBeenCalledTimes(1);

        //Que se haya llamado una vez y reciba un funcion de parametro
        expect( setCategories ).toHaveBeenCalledWith( expect.any( Function ) );

        expect( input.prop('value') ).toEqual( '' ) 
        
    })
    
    
    
});
