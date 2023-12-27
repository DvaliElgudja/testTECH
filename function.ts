export function charGenerator(prefixes: string[]): string[] {
    let results: string[] = [];

    //  Parcourt tous les préfixes
    for (let i:number = 0; i < prefixes.length; i++) {
        // Ajoute le prefixe actuel aux résultats
        results.push(prefixes[i]);

        // Crée des combinaisons avec un autre préfixe
        for (let j:number = i + 1; j < prefixes.length; j++) {
            // Ajoute la combinaison des deux prefixes
            results.push(prefixes[i] + prefixes[j]);

            // Avec les combinaisons de deux, ajoute le troisième préfixe dans le cas où cela existe
            for (let k:number = j + 1; k < prefixes.length; k++) {
                results.push(prefixes[i] + prefixes[j] + prefixes[k]);

                // Dans le cas où nous rajoutons un 4ème préfixe
                // for (let l: number = k + 1; l < prefixes.length; l++) {
                //     results.push(prefixes[i] + prefixes[j] + prefixes[k] + prefixes[l]);
            }
        }
    }
    
    return results;
}
