import { charGenerator } from './function'; 

describe('charGenerator', () => {
    it('doit générer les bonnes combinaisons avec les préfixes donnés', () => {
        const prefixes = ['c', 'n', 's'];
        const expectedOutput = ['c', 'cn', 'cns', 'cs', 'n', 'ns', 's'];
        expect(charGenerator(prefixes)).toEqual(expectedOutput);
    });

    it('doit renvoyer un tableau vide si aucun préfixe n est fourni', () => {
        const prefixes:string[] = [];
        const expectedOutput:string[] = [];
        expect(charGenerator(prefixes)).toEqual(expectedOutput);
    });

    it('doit gérer les doublons', () => {
        const prefixes = ['a', 'a', 'b'];
        const expectedOutput = ['a', 'aa', 'aab', 'ab', 'a', 'ab', 'b'];
        expect(charGenerator(prefixes)).toEqual(expectedOutput);
    });

    it('doit pouvoir gérer les caractères spéciaux', () => {
        const prefixes = ['$', '%', '&'];
        const expectedOutput = ['$', '$%', '$%&', '$&', '%', '%&', '&'];
        expect(charGenerator(prefixes)).toEqual(expectedOutput);
    });
});
