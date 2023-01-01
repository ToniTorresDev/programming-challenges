/*
 * Challenge #0
 * THE FAMOUS "FIZZ BUZZ"
 * Difficult: EASY
 * Challenge: Write a program that shows by console the numners
 * from 1 to 100 (each one included) replacing the following things:
 * - Multiple of 3 by "fizz" word.
 * - Multiple of 5 by "buzz" word.
 * - Multiple of 3 and 5 at the same time by "fizzbuzz" word.
 */

test()

function test() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) console.log(i, "fizzbuzz");
        else if (i % 3 === 0) console.log(i, "fizz");
        else if (i % 5 === 0) console.log(i, "buzz");
        
    }
}
