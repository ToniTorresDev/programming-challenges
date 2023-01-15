/*
 * Reto #2
 * THE FIBONACCI SEQUENCE
 * Diifficult: HARD
 *
 * Write a program that shows the first 50 numbers 
 * using Fibonacci sequnce. it has to show the following numbers:
 * 0, 1, 1, 2, 3, 5, 8, 13...
 * starting by 0 and showing the sum of the last two numbers
 */

run_fibonacci()

function run_fibonacci() {
    let last_number_1 = 0
    let last_number_2 = 0
    let result = []
    
    for (let i = 0; i < 51; i++) {
        total = last_number_1 + last_number_2

        result.push({
            // position: i,
            last_number_1: last_number_1,
            last_number_2: last_number_2,
            total: total,
        })

        if (i === 0) last_number_1++

        if (i % 2 === 1) last_number_1 = total
        else last_number_2 = total        
    }
    
    console.table(result);
}
