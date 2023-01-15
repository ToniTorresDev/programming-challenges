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

var startTime = performance.now()
run_fibonacci_v1()
var endTime = performance.now()
console.log(`For loop version ${endTime - startTime} milliseconds`)

function run_fibonacci_v1() {
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

let run_fibonacci_v2 = (last_number_1, last_number_2) => {
    if (index === 51) return ;

    total = last_number_1 + last_number_2

    result.push({
        // position: i,
        last_number_1: last_number_1,
        last_number_2: last_number_2,
        total: total,
    })

    if (index === 0) last_number_1++

    if (index % 2 === 1) last_number_1 = total
    else last_number_2 = total
    
    index++

    return run_fibonacci_v2(last_number_1, last_number_2)
}

var  result = []
var index = 0

startTime = performance.now()
run_fibonacci_v2(0, 0)
endTime = performance.now()

console.table(result)
console.log(`Recursive function version ${endTime - startTime} milliseconds`)

