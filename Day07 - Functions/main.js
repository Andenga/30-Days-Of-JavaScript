function fullName(x){
  let firstName = "Lydia"
  let secondName = "Tabasamu"
  console.log(firstName + " " + secondName)
}
fullName()

function funames(fname, lname){
  return `${fname} ${lname}`
}
console.log(funames("Lee", "Bee"))

function addNumbers(x, y){
  return x + y
}
console.log(addNumbers(3, 6))

function areaOfRectangle(length, width){
  return length * width
}
console.log(areaOfRectangle(4, 5))

function perimeterOfRectangle(length, width){
  return perimeter = 2 * (length + width)
}
console.log(perimeterOfRectangle(5, 4))

const volumeOfRectPrism = (length, width, height) => {
  return length * width * height
}
console.log(volumeOfRectPrism(2, 2, 2))

function areaOfCircle(r){
  return Math.PI * r * r
}
console.log(areaOfCircle(7))

function circumOfCircle(r){
  return 2 * Math.PI * r
}
console.log(circumOfCircle(7))

function density(mass, volume){
  return mass/volume
}
console.log(density(3, 7))

function speed(distance, time){
  return distance * time
}
console.log(speed(3, 6))

function weight(mass, gravity = 10){
  return mass * gravity
}
console.log(weight(3))

function convertCelsiusToFahrenheit(oC){
  oF = (oC * 9/5) + 32
  return oF
}
console.log(convertCelsiusToFahrenheit(5))

function BMI(weight, height){
  let BMI =  weight / (height * height)
  if(BMI < 18.5){
    return `You are underweight, Your BMI is ${BMI}`
  }else if (BMI  < 24.9){
    return `You are Normal weight, Your BMI is ${BMI}`
  }else if (BMI <= 29.9){
    return `You are overweight, Your BMI is ${BMI}`
  }else {
    return  `Your are obese, Your BMI is ${BMI}`
  }
}
console.log(BMI(5, 7))

function findMax(a, b, c){
  if (a > b & a > c){
    return a
  }else if(b > a & b > c){
    return b
  }else {
    return c
  }
}
console.log(findMax(15, 90, 5))

function findmax(...numbers){
  return Math.max(numbers)
}
console.log(findMax(3, 7, 8, 4, 6))

//Exercises: Level 2

/*


Linear equation is calculated as follows: ax + by + c = 0. Write a function which 
calculates value of a linear equation, solveLinEquation.

Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function 
which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

showDateTime()
08/01/2020 04:08

Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5) // x = 5, y = 4
Declare a function name reverseArray. It takes array as a parameter and 
it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']
Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

Declare a function name evensAndOdds . It takes a positive integer
 as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.
Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10

Writ a function which generates a randomUserIp.

Write a function which generates a randomMacAddress

Declare a function name randomHexaNumberGenerator. When this function is called 
it generates a random hexadecimal number. The function return the hexadecimal number.

console.log(randomHexaNumberGenerator());
'#ee33df'
Declare a function name userIdGenerator. When this function is called it generates 
seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE



Exercises: Level 3
Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. 
It doesn’t take any parameter but it takes two inputs using prompt(). One of the input 
is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr
'

Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)
Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

Write a function arrayOfRgbColors which return any number of RGB colors in an array.

Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

Write a function generateColors which can generate any number of hexa or rgb colors.

console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)) // '#b334ef'
console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

Call your function isEmpty, it takes a parameter and it checks if it is empty or not

Call your function sum, it takes any number of arguments and it returns the sum.


Write a function called sumOfArrayItems, it takes an array parameter and
 return the sum of all the items. Check if all the array items are number types. 
 If not give return reasonable feedback.

Write a function called average, it takes an array parameter and returns the average
 of the items. Check if all the array items are number types. If not give return reasonable feedback.


Write a function called modifyArray takes array as parameter and modifies the fifth 
item of the array and return the array. If the array length is less than five it return 'item not found'.

console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
  'Not Found'


Write a function called isPrime, which checks if a number is prime number.

Write a functions which checks if all items are unique in the array.

Write a function which checks if all the items of the array are the same data type.

JavaScript variable name does not support special characters or symbols except $ or _. 
Write a function isValidVariable which check if a variable is valid or invalid variable.


Write a function which returns array of seven random numbers in a range of 0-9. 
All the numbers must be unique.

sevenRandomNumbers()
[(1, 4, 5, 7, 9, 8, 0)]
Write a function called reverseCountries, it takes countries array and first it 
copy the array and returns the reverse of the original array



*/