import asynPeticion from "../../bases/11-async-await";

describe('Pruebas archivo 09', () => {

    test('funcion asyncPeticion', async () => { 
        const url = await asynPeticion();

        expect(url.includes('https://')).toBe(true);
     });

});