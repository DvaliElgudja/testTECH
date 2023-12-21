export function generString(prefixes: string[]): string[] {
    // Trier les préfixes dans l'ordre alphabétique
    const sortedPrefixes = [...prefixes].sort((a, b) => {
        return a.localeCompare(b);
    });

    // Initialisation d'un tableau vide pour stocker les combinaisons
    const result: string[] = [];

    // Fonction récursive pour générer les combinaisons
    function gener(startIndex: number, currentCombi: string): void {
        for (let i = startIndex; i < sortedPrefixes.length; i++) {
            // Créer une nouvelle combinaison en ajoutant le préfixe actuel
            const newCombi = currentCombi + sortedPrefixes[i];

            // Ajouter la nouvelle combinaison au tableau
            result.push(newCombi);

            // Appeler récursivement la fonction avec l'indice mis à jour et la nouvelle combinaison
            gener(i + 1, newCombi);
        }
    }

    // Démarrer la génération avec un préfixe vide et un indice de départ à 0
    gener(0, '');

    // Retourner les combinaisons générées
    return result;
}
//line de code qui permet d'executer le code(exemple d'usage de la fonction), avec tsc generString.ts qui cree generString.js et pour executer avec node generString.js

// const prefixes = ['c', 'n', 's'];
// const result = generString(prefixes);
// console.log(result);



// J'ai essayer de mettre le plus de comments possible pour la bonnes pratiques même si je ne suis pas tres habitué. 


