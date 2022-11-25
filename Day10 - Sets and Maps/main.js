let emptyset = new Set ()
console.log(emptyset)
let x = []
for(i = 0; i <= 10; i++){
  x.push(i)
}
console.log(x)
let xarray = new Set(x)
console.log(xarray)
console.log(xarray.size)
console.log(xarray.delete(2))
console.log(xarray.size)
console.log(xarray.clear())
console.log(xarray)
const countries = ['Finland', 'Sweden', 'Norway']
let setcountries = new Set(countries)
console.log(setcountries)
//Create a map of countries and number of characters of a country
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const c = [...a, ...b]
console.log(c)

let A = new Set(a)
let B = new Set(b)
let cs = a.filter((p) => B.has(p))
let C = new Set(cs)
console.log(C)

//How many languages are there in the countries object file.

//*** Use the countries data to find the 10 most spoken languages:
