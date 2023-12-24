import { charGenerator } from './function'; 

describe('charGenerator', () => {
    it('cela doit generer les bonne combinaisons avec les prfixes données', () => {
        const prefixes = ['c','n','s'];
        const expectedOutput = ['c','cn','cns','cs','n','ns','s'];
        expect(charGenerator(prefixes)).toEqual(expectedOutput);
    });

    it('ca doit renvoyer un tableau vide', () => {
        const prefixes:string[] = [];
        const expectedOutput:string[] = [];
        expect(charGenerator(prefixes)).toEqual(expectedOutput);
    });

    it('ca dois gerer les doublons', () => {
        const prefixes = ['a','a','b'];
        const expectedOutput = ['a','aa','aab','ab','a','ab','b'];
        expect(charGenerator(prefixes)).toEqual(expectedOutput);
    });

    it('arrive a gerer les caracters speciaux', () => {
        const prefixes = ['$', '%', '&'];
        const expectedOutput = ['$','$%','$%&','$&','%','%&','&'];
        expect(charGenerator(prefixes)).toEqual(expectedOutput);
    });
});
