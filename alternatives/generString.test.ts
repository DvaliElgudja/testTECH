// ___________________ Consignes____________________
//La fonctionnalité sera testée à l'aide d'un test unitaire écrit avec jest.
        
//   Préfixes en entrée: ['c', 'n', 's']
//   Résultat attendu dans cet ordre:
//     [
//      'c',
//      'cn',
//      'cns',
//      'cs',
//      'n',
//      'ns',
//      's'
//     ]



import { generString } from './generString';

describe('generString function', () => {
    test('met en place toutes les combinaisons des préfixes donnés dans l ordre spécifié', () => {
        const prefixes = ['s', 'n', 'c'];
        const expectedOutput = ['c', 'cn', 'cns', 'cs', 'n', 'ns', 's'];
        expect(generString(prefixes)).toEqual(expectedOutput);
    });

    test('met en place toutes les combinaisons des préfixes donnés dans l ordre spécifié', () => {
        const prefixes = ['c', 'c', 's'];
        const expectedOutput = ['c', 'cc', 'ccs', 'cs', 'c', 'cs', 's'];
        expect(generString(prefixes)).toEqual(expectedOutput);
    });

    test('gère des préfixes contenant des majuscules', () => {
        const prefixes = ['C', 'N', 'S'];
        const expectedOutput = ['C', 'CN', 'CNS', 'CS', 'N', 'NS', 'S'];
        expect(generString(prefixes)).toEqual(expectedOutput);
    });
    
    test('gère des préfixes mixant majuscules et minuscules', () => {
        const prefixes = ['C', 'n', 'S'];
        const expectedOutput = ['C', 'Cn', 'CnS', 'CS', 'n', 'nS', 'S'];
        expect(generString(prefixes)).toEqual(expectedOutput);
    });
    

    
    test('met en place toutes les combinaisons des préfixes donnés dans l ordre spécifié meme avec une lettre manquante', () => {
        const prefixes = ['', 'n', 's'];
        const expectedOutput = ['', 'n', 'ns', 's', 'n', 'ns', 's',];
        expect(generString(prefixes)).toEqual(expectedOutput);
    });




    test('gere un tableau vide', () => {
        expect(generString([])).toEqual([]);
    });

    // test('gère des préfixes avec des caractères spéciaux', () => {
    //     const prefixes = ['$', '%', '&'];
    //     const expectedOutput = ['$', '$%', '$%&', '$&', '%', '%&', '&'];
    //     expect(generString(prefixes)).toEqual(expectedOutput);
    // });

    // test('gère des préfixes mixant lettres, chiffres et symboles', () => {
    //     const prefixes = ['a', '2', '$'];
    //     const expectedOutput = ['a', 'a2', 'a2$', 'a$', '2', '2$', '$'];
    //     expect(generString(prefixes)).toEqual(expectedOutput);
    // });

  

    
    

    
});

//je n'ai pas souvent utilisé les test dans mon parcours, j'ai eu recours au Google pour les premier pas et puis les test a la suite sont ajoutés par moi meme.



