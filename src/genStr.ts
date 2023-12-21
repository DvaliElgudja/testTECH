export function genStr(prefixes: string[]): string[] {
    // Initialisation d'un tableau vide pour stocker les combinaisons
    const result: string[] = [];

    // Fonction récursive pour générer les combinaisons
    function gen(startIndex: number, currentCombi: string): void {
        for (let i: number = startIndex; i < prefixes.length; i++) {
            // Créer une nouvelle combinaison en ajoutant le préfixe actuel
            const newCombi:string = currentCombi + prefixes[i];

            // Ajouter la nouvelle combinaison au tableau
            result.push(newCombi);

            // Appeler récursivement la fonction avec l'indice mis à jour et la nouvelle combinaison
            gen(i + 1, newCombi);
        }
    }

    // Démarrer la génération avec un préfixe vide et un indice de départ à 0
    gen(0, '');

    // Retourner les combinaisons générées
    return result;
}
//line de code qui permet d'executer le code(exemple d'usage de la fonction), avec tsc genStr.ts qui cree genStr.js et pour executer avec node genStr.js
// const prefixes = ['c', 'n', 's'];
// const result = genStr(prefixes);
// console.log(result);



// J'ai essayer de mettre le plus de comments possible pour la bonnes pratiques même si je ne suis pas tres habitué. 


