import { getGifs } from "../../helpers/getGifs";


describe('test in getGifs Fetch', () => {
    test('should bring 10 items', async(  ) => {
        
        const gifs = await getGifs();

        expect( gifs.length ).toBe( 10 )

    })

    test('should bring 10 items', async(  ) => {
        
        const gifs = await getGifs();
        console.log(gifs)

        expect( gifs.length ).toBe( 10 )

    })
    
});
