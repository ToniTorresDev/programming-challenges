/*
 * Challenge #0
 * ARE ANAGRAMS?"
 * Difficult: MEDIUM
 * Challenge: Write a program that from two words say by console if they are anagrams
 */

is_anagram('peso', 'sopa') // false
is_anagram('pereza', 'pereza') // false
is_anagram('sergio', 'riesgo') // true
is_anagram('caso', 'saco') // true
is_anagram('amor', 'roma') // true

function is_anagram(a, b) {
    // If they are equal from beginning are not anagrams
    if (a === b) {
        console.log(a + ' and ' + b + ' are not anagrams');
        return ;
    }

    // 1. string to array
    // 2. order
    // 2. array to string
    let y = a.split('').sort().join(''),
        z = b.split('').sort().join('');

    // if they are equals then are anagrams
    console.log(z === y
        ? 'TRUE:' + a + ' and ' + b + ' are anagrams!'
        : 'FALSE:' + a + ' and ' + b + ' are not anagrams.');
}
