// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");

/**
 * Turn a string with an upper case
 * @param {string} - the word to capitalized
 * @return {string} - capitalized word
 */
function capitalize(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

/**
 * Get a text in CamelCase.
 * @param {string} text - a text.
 * @returns {string} - Get a text in CamelCase.
 */
function transformCamelCase(text) {
    let words = text.toLowerCase().split(" ");
    for (let index = 1; index < words.length; index++) {
        words[index] = words[index][0].toUpperCase() + words[index].slice(1);
    }
    return words.join("");
}

// --------- Short version of the code ------------------

// function transformCamelCase2(text) {
//     return text
//         .toLowerCase()
//         .split(" ")
//         .map((w, i) => i === 0 ? w : capitalize(w))
//         .join("");
// }

console.log(transformCamelCase("TEST pour voir le camelcase"));
// console.log(transformCamelCase2("TEST pour voir le camelcase"));

// -----------------------------------
console.log("2/ Implémentez une fonction qui retourne le plus grand mot d'un texte.");

/**
 * Get the longest word from a text.
 * @param {string} text The text you want to get the largest word from.
 * @returns {string} The longest word in a text
 */
function getLongestWord(text) {
    let longestWord;
    for (const word of text.split(' ')) {
        if (longestWord === undefined || word.length > longestWord.length) {
            longestWord = word
        }
    }
    return longestWord
}

console.log(getLongestWord("La confiture d'orange amère est une petite pépite de saveur au réveil. C'est délicieux sur du bon pain frais."));

// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");



console.log();

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");

console.log();

// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

console.log();

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

console.log();

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125
};

console.log();

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();