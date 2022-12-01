/*
Exercises:Level 1
Display the countries array as a table
Display the countries object as a table
Use console.group() to group logs
*/
console.assert(10 > 2 * 10, "no it isn't")
console.warn("This is a warning message")
console.error("This is an error message ")

console.time("while loop")
let x = 5
while (x < 2){
    console.log(x)
}
console.timeEnd("while loop")

console.time("for loop")
let x = 5
for (x = 0; x < 5; x++){
    console.log(x)
}
console.timeEnd("for loop")








/*
Check the speed difference among the following loops: while, for, for of, forEach

*/