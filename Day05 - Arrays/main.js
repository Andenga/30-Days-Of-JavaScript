const empty_array = Array()
const arr_1 = [19, 27, 35, 41, 10]
console.log(arr_1.length)
console.log(arr_1[0])
console.log(arr_1[arr_1.length - 1])
console.log(arr_1[2])
const mixedDataTypes = ["boy", "girl", 67, [1, 2, 3], "mixed", "True"]
console.log(mixedDataTypes.length)
const companies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]
console.log(companies)
console.log(companies.length)
console.log(companies[0])
console.log(companies[3])
console.log(companies[companies.length - 1])
for (let i = 0; i < companies.length; i++){
  console.log(companies[i])
}
for (i = 0; i < companies.length; i++){
  console.log(companies[i].toUpperCase())
}
for (i = 0; i < companies.length; i++){
  console.log(`${companies.toString()} are big IT companies`)
}
/*
let search_company = prompt("Enter company", )
companies.includes(search_company) ? console.log(search_company) : console.log("company not found")
*/

console.log(companies.sort())
console.log(companies.reverse())
console.log(companies.slice(4))
console.log(companies.slice(0, 3))
console.log(companies)
console.log(companies.slice(3, 4))
console.log(companies.slice(0, 1))
console.log(companies.slice(companies.length-1))
console.log(companies.slice())

//Exercise: Level 2
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

//Revisit
//First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
console.log(text.replace(/[.,]/g, ""))
//End of revisit 

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift("Meat")
shoppingCart.push("Sugar")
shoppingCart.splice(4, 1)
shoppingCart[3] = "GreenTea"
console.log(shoppingCart)

if (countries.includes("Ethiopia")){
  console.log("Ethiopia")
}else {
  countries.push("Ethiopia")
}
webTechs.includes("Sass") ? console.log("Sass is a CSS preprocess") : webTechs.push("Sass")
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
var fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//Exercise: Level 3
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
let filteredAges = console.log(ages.sort())
let minAge = console.log(ages[0])
let maxAge = console.log(ages[ages.length - 1])
console.log(ages[ages.length / 2])

//Find the average age(all items divided by number of items)
//Find the ranges of the ages(max minus min)
//Compare the value of (min - average) and (max - average), use abs() method

console.log(countries[5])

if (countries.length / 2 === 0){

}else {
  countries.push("Kenya")
}



for (i = 0; i < companies.length; i++){
  let string_companies = companies[i].toString()
  if (string_companies.indexOf("o") != string_companies.lastIndexOf("o")){
    console.log(string_companies)
  }
}
