export function charGenerator(prefixes: string[]): string[] {
    let results: string[] = [];

    // parcourours tous les préfixes
    for (let i = 0; i < prefixes.length; i++) {
        // ajoute le prefixe actuel aux résultats
        results.push(prefixes[i]);

        // cree des combinaisons avec un autre prefixe
        for (let j = i + 1; j < prefixes.length; j++) {
            // ajoute la combinaison des deux prefixes
            results.push(prefixes[i] + prefixes[j]);

            // avec les combinaison de deux ajoute le troisieme prefixe dans le cas ou cela exsite
            for (let k = j + 1; k < prefixes.length; k++) {
                results.push(prefixes[i] + prefixes[j] + prefixes[k]);
            }
        }
    }
    //renvoi le resultat
    return results;
}
