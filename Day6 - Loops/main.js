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

for(let i = 0; i <=10; i++){
  console.log(i)
}
i = 0
while (i <= 10){
  console.log(i)
  i++
}
i = 0
do{
  console.log(i)
  i++
}while(i <= 10)
for (i = 10; i >= 0; i--){
  console.log(i)
}
i = 10
while(i >= 0){
  console.log(i)
  i--
}
i = 10
do{
  console.log(i)
  i--
}while(i >= 0)

let n = 6
for (i = 0; i <= n; i++){
  console.log(i)
}


for(i = 1; i <= 10; i++){
  let str = " "
  for(let j = 0; j < i; j++){
    str += "*"
  }
  console.log(str)
}

for(i = 0; i <= 7; i++){
  console.log("^".repeat(i))
}

for(i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}


while(i <= 10){
  console.log("i i^2 i^3")
  i++
  console.log(`${i} ${i**2} ${i**3}`)
}


for(i = 0; i <= 10; i++){
  console.log(`${i} ${i**2} ${i**3}`)
}

for(i = 0; i <= 100; i++){
  if(i % 2 === 0){
    console.log(i)
  }
}

for(i = 0; i <= 100; i++){
  if(i % 2 !== 0){
    console.log(i)
  }
}

//Use for loop to iterate from 0 to 100 and print only prime numbers

let sum = 0
for(i = 0; i <= 100; i++){
  sum += i
}
console.log(sum)

let sumOfEven = 0
let sumOfOdd = 0
for(i = 0; i <= 100; i++){
  if(i %2 == 0){
    sumOfEven += i
  }else {
    sumOfOdd += i
  }
}
console.log("The sum of even is " + sumOfEven + " and the sum of odd is " + sumOfOdd)

for(i = 0; i <= 5; i++){
  console.log(Math.floor(Math.random(i)))
}

let arrayLength = 5
let array = []
for (i = 0; i < arrayLength; i++){
  array.push(Math.random())
}
console.log(array)

/*
Develop a small script which generate array of 5 random numbers and the numbers must be unique

Develop a small script which generate a six characters random id:

5j2khz
 
Answer to be reviewed:

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

console.log(makeid(5));

*/

//Exercise: Level 2







/*
Exercises: Level 2
Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba
Write a script which generates a random hexadecimal number.

'#ee33df'
Write a script which generates a random rgb color number.

rgb(240,180,80)

Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

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

In above countries array, check if there is a country or countries containing the word 'land'. 
If there are countries containing 'land', print it as array. If there is no country 
containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']
In above countries array, check if there is a country or countries end with a 
substring 'ia'. If there are countries end with, print it as array. If there is no 
country containing the word 'ai', print 'These are countries ends without ia'.

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
Arrays are mutable. Create a copy of array which does not modify the original.
 Sort the copied array and store in a variable sortedCountries
Sort the webTechs array and mernStack array
Extract all the countries contain the word 'land' from the countries array and print it as array
Find the country containing the hightest number of characters in the countries array
Extract all the countries contain the word 'land' from the countries array and print it as array
Extract all the countries containing only four characters from the countries array and print it as array
Extract all the countries containing two or more words from the countries array and print it as array
Reverse the countries array and capitalize each country and stored it as an array




*/