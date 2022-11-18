for(let i = 0; i <= 10; i++){
  console.log(i)
}

i = 0
while(i <= 10){
  console.log(i)
  i++
}

i = 0
do{
  console.log(i)
  i++
}while(i <= 10)

for(i = 10; i >= 0; i--){
  console.log(i)
}

i = 10
while (i >= 0){
  console.log(i)
  i --
}

i = 10
do{
  console.log(i)
  i --
}while (i >= 0)

let n = 1
for(i = 0; i <= n; i++){
  console.log(i)
}

for(i = 0; i <= 7; i++){
  console.log("*".repeat(i))
}

for(i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}

for(i = 0; i <= 10; i++){
  console.log(`${i} ${i**2} ${i**3}`)
}

for(i = 0; i <= 100; i++){
  if(i % 2 === 0){
    console.log(i)
  }
}

for(i = 0; i<= 100; i++){
  if(i % 2 !== 0){
    console.log(i)
  }
}

for(i = 0; i <= 100; i++){

}

//Use for loop to iterate from 0 to 100 and print only prime numbers

let sum = 0
for(i = 0; i <= 100; i++){
  sum = sum + i
}
console.log(sum)

let sumEven = 0
let sumOdd = 0
for(i = 0; i <= 100; i++){
  if(i % 2 === 0 ){
    sumEven = sumEven + i
  }else{
    sumOdd = sumOdd + i
  }
}
console.log(`Sum of even numbers is ${sumEven} and sum of odd numbers is ${sumOdd}`)

let arr = []
let arrLength = 5
for (var i=0 ;i < arrLength; i++) {
    arr.push(Math.round(Math.random() * arrLength))
}
console.log(arr)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique

let charLength = 15
char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
let result = " "
for(i = 0; i < charLength; i++){
  result += char.charAt(Math.floor(Math.random() * char.length))
}
console.log(result)

/*
Write a script which generates a random hexadecimal number.

'#ee33df'
Write a script which generates a random rgb color number.

rgb(240,180,80)
*/

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

let capsarray = []
for(const capscountries of countries){
  capsarray.push(capscountries.toUpperCase())
}
console.log(capsarray)

let capsarraylength = []
for(const countryLength of countries){
  capsarraylength.push(countryLength.length)
}
console.log(capsarraylength)

/*
Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]

*/








/*

In above countries array, check if there is a country or countries containing the word 'land'.
 If there are countries containing 'land', print it as array. If there is no country containing 
 the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']


In above countries array, check if there is a country or countries end with a substring 'ia'.
 If there are countries end with, print it as array. If there is no country containing the word 'ai', 
 print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']

Using the above countries array, find the country containing the biggest number of characters.

Ethiopia
Using the above countries array, find the country containing only 5 characters.

['Japan', 'Kenya']
Find the longest word in the webTechs array

Use the webTechs array to create the following array of arrays:

[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
An application created using MongoDB, Express, React and Node is called a MERN stack app.
 Create the acronym MERN by using the array mernStack

Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] 
using a for loop or for of loop and print out the items.

This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using 
loop without using a reverse method.

Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
  HTML
  CSS
  JS
  REACT
  NODE
  EXPRESS
  MONGODB

Exercises: Level 3
Copy countries array(Avoid mutation)
Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
Sort the webTechs array and mernStack array
Extract all the countries contain the word 'land' from the countries array and print it as array
Find the country containing the hightest number of characters in the countries array
Extract all the countries contain the word 'land' from the countries array and print it as array
Extract all the countries containing only four characters from the countries array and print it as array
Extract all the countries containing two or more words from the countries array and print it as array
Reverse the countries array and capitalize each country and stored it as an array
tada CONGRATULATIONS ! tada





const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']




*/