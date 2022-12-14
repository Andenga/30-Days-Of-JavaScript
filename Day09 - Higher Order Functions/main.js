const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

countries.forEach(country => console.log(country)) //forEach iterates an array element
names.forEach(name => console.log(name.toUpperCase()))
numbers.forEach(number => console.log(number))
console.log(countries.map((country) => country.toUpperCase())) //map returns a new array
console.log(countries.map((country) => country.length))
console.log(numbers.map((number) => number * number))
console.log(names.map((name) => name.toUpperCase()))
console.log(countries.filter((country) => country.includes("land")))
console.log(countries.filter((country) => country.length == 6))//Filters out items fulfilling filtering condition
console.log(countries.filter((country) => country.length >= 6))
console.log(countries.filter((country) => country.startsWith("S")))
function getStringLists(x){
  let strreturn = x.forEach((y) => console.log(y))
  return strreturn
}
console.log(getStringLists(countries))
console.log(numbers.reduce((acc, cur) => acc + cur, 0))
//Use map to map the products array to its corresponding prices.
//Use filter to filter out only prices with values.
/*
Use reduce to concatenate all the countries and to produce this sentence: 
Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
*/
console.log(names.some((namee) => namee.length > 7))//Checks if some of the elements are similiar in one aspect
console.log(countries.every((country) => country.includes("land")))//Checks if all elements are similiar in one aspect
console.log(countries.find((country) => country.length == 6))//Returns first element which satisfies the condition
console.log(countries.findIndex((country) => country.length ==6 ))//Returns the position of the first element satisfying the condition
console.log(countries.findIndex((country) => country == "Norway"))
console.log(countries.findIndex((country) => country == "Russia"))

//Exercises: Level 2
/*
Find the total price of products by chaining two or more array iterators
(eg. arr.map(callback).filter(callback).reduce(callback))
Find the sum of price of products using only reduce reduce(callback))
Declare a function called categorizeCountries which returns an array of countries which have some common pattern
(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
Create a function which return an array of objects, which is the letter and the number of times the 
letter use to start with a name of a country.
Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
Use the countries information, in the data folder. Sort countries by name, by capital, by population
Find out which letter is used many times as initial for a country name from the countries array
 (eg. Finland, Fiji, France etc)

Use the countries information, in the data folder. Sort countries by name, by capital, by population

*** Find the 10 most spoken languages:

// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]```
*** Use countries_data.js file create a function which create the ten most populated countries

console.log(mostPopulatedCountries(countries, 10))

[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000},
{country: 'Indonesia', population: 258705000},
{country: 'Brazil', population: 206135893},
{country: 'Pakistan', population: 194125062},
{country: 'Nigeria', population: 186988000},
{country: 'Bangladesh', population: 161006790},
{country: 'Russian Federation', population: 146599183},
{country: 'Japan', population: 126960000}
]

console.log(mostPopulatedCountries(countries, 3))
[
{country: 'China', population: 1377422166},
{country: 'India', population: 1295210000},
{country: 'United States of America', population: 323947000}
]
```
*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.

const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

console.log('Count:', statistics.count()) // 25
console.log('Sum: ', statistics.sum()) // 744
console.log('Min: ', statistics.min()) // 24
console.log('Max: ', statistics.max()) // 38
console.log('Range: ', statistics.range() // 14
console.log('Mean: ', statistics.mean()) // 30
console.log('Median: ',statistics.median()) // 29
console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log('Variance: ',statistics.var()) // 17.5
console.log('Standard Deviation: ', statistics.std()) // 4.2
console.log('Variance: ',statistics.var()) // 17.5
console.log('Frequency Distribution: ',statistics.freqDist()) # [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
console.log(statistics.describe())
Count: 25
Sum:  744
Min:  24
Max:  38
Range:  14
Mean:  30
Median:  29
Mode:  (26, 5)
Variance:  17.5
Standard Deviation:  4.2
Frequency Distribution: [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]
tada CONGRATULATIONS ! tada




*/
