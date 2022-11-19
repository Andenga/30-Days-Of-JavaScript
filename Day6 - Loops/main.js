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
  'Kenya',
  'iceland'
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
Research on map

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

let landCountries = []
function Check(x) {
    if (x.includes('land'))
        return x
}
landCountries = countries.filter(Check)
landCountries != [] ? console.log(landCountries) : console.log("All these countries are without land")

let iaarray = []
function iacountries(y){
  if(y.endsWith("ia"))
    return y
}
iaarray = countries.filter(iacountries)
iaarray != [] ? console.log(iaarray) : console.log("These are countries that end without ia")

let _5charcountry = []
function charcountry(v){
  if(v.length === 5)
  return v
}
_5charcountry = countries.filter(charcountry)
if (_5charcountry != []){
  console.log(_5charcountry)
}

/*
Using the above countries array, find the country containing the biggest number of characters : Ethiopia
Find the longest word in the webTechs array
*/

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

/* Review
Use the webTechs array to create the following array of arrays:
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
*/
let arrweblength = []
arrweb = []
for(const arrwebTechs of webTechs){
  console.log(`"${arrwebTechs}", ${arrwebTechs.length}`)
  arrweblength.push(arrwebTechs.length)
  arrweb.push(arrwebTechs)
}
console.log(arrweblength)
console.log(arrweb)
//End of review

//Review
for(const mern of mernStack){
  console.log(mern[0])
}
//End of review 

for(const webtech of webTechs){
  console.log(webtech)
}

let fruits = ['banana', 'orange', 'mango', 'lemon']

const arrfruits = []
for(i = 0; i <= fruits.length-1; i++){
  arrfruits.unshift(fruits[i])
}
console.log(arrfruits)

console.log(fruits.reverse())

/*
Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]
*/


//Exercises: Level 3
countriescopy = countries.concat()
sortedCountries = countriescopy.sort()
console.log(sortedCountries)

console.log(webTechs.sort())
console.log(mernStack.sort())
