let country = "Tanzania"
let city = "Arusha"
let age = 30
let isMarried = true
let year = 2022
console.log(typeof(firstName))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(10) == 10)
console.log(parseInt("9.8") == 10)
let numb = 0
console.log(numb == 0)
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4 )
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))

//There is no 'on' in both dragon and python

let pyth = "python"
pyth_len = console.log(pyth.length)
let jar = "jargon"
jar_len = console.log(jar.length)
console.log(pyth_len != jar_len)

let now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth() + 1)
console.log(now.getDate())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())
console.log(now.getDay())
console.log(now)

/*
let base = prompt("Enter base", )
let height = prompt("Enter height", )
let area = 0.5 * base * height
console.log(`The area of the triangle is ${area}`)
*/

/*
let a = Number(prompt("Enter side a", ))
let b = Number(prompt("Enter side b", ))
let c = Number(prompt("Enter side b", ))
let perimeter = a + b + c
console.log(`The perimeter of the triangle is ${perimeter}`)
*/

/*
let rec_length = Number(prompt("Enter length", ))
let rec_width = Number(prompt("Enter width", ))
let rec_area = rec_length * rec_width
let rec_perimeter = 2 * (rec_length + rec_width)
console.log(`The area of the rectangle is ${rec_area}`)
console.log(`The perimeter of the rectangle is ${rec_perimeter}`)
*/
/*
let circle_radius = Number(prompt("Enter the radius", ))
circle_area = Math.PI * circle_radius * circle_radius
circumference = 2 * Math.PI * circle_radius
console.log(`The area of the circle is ${circle_area}`)
console.log(`The circumference of the circle is ${circumference}`)
*/
/*
Calculate the slope, x-intercept and y-intercept of y = 2x -2

Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

Compare the slope of above two questions.

Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
*/
/*
let hours = Number(prompt("Enter hours", ))
let rate_per_hour = Number(prompt("Enter the rate per hour", ))
console.log(`Weekly earnings is ${hours * rate_per_hour}`)
*/

/*
let f_name = prompt("Enter your first name", )
let s_name = prompt("Enter your second name", )

if (f_name > 7){
    console.log(`Your first name, ${f_name} is long`)
}else {
    console.log(`Your first name, ${f_name} is short`)
}

if (f_name.length > s_name.length){
    console.log(`Your first name, ${f_name} is longer than your family name, ${s_name}`)
}else {
    console.log(`Your family name, ${s_name} is longer than your first name, ${f_name}`)
}
*/
let myAge = 45
let yourAge = 18

console.log(`I am ${myAge - yourAge} years older than you`)

let birth_year = Number(prompt("Enter birth year", ))

let Age = now.getFullYear() - birth_year
let Age_diff = 18 - Age
if (Age > 18){
    console.log(`You are ${Age}. You are old enough to drive`)
} else{
    console.log(`You are ${Age}. You will be allowed to drive after ${Age_diff} years.`)
}


let years = Number(prompt("Enter number of years you live:" ))
let sec = years * 31536000
console.log(`You have lived ${sec} seconds`)



/*

Create a human readable time format using the Date time object

YYYY-MM-DD HH:mm
DD-MM-YYYY HH:mm
DD/MM/YYYY HH:mm


Exercises: Level 3
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05


*/