/*
let age = Number(prompt("Enter your age:", ))
let yearsTo18 = 18 - age
if (age > 18){
  console.log("You are old enough to drive")
}else {
  console.log(`You are left with ${yearsTo18} years to drive`)
}

let myAge = 22
let yourAge = Number(prompt("Enter your age:", ))
if (myAge > yourAge){
  console.log("You are younger than me")
} else {
  console.log(`You are ${yourAge - myAge} years older than me`)
}
*/

let a = 4
let b = 3
let c = a > b
if (a > b){
  console.log("a is greater than b")
}else {
  console.log("a is less than b")
}

a > b ? console.log("a is greater than b") : console.log("a is less than b")

/*
let number = Number(prompt("Enter a number:", ))
number%2 == 0 ? console.log(`${number} is an even number`) : console.log(`${number} is an odd number`)
*/


//Exercises: Level 2
let grade = Number(prompt("Enter your grade:", ))

switch (true){
  case grade > 80:
    console.log("Grade A")
    break
  case grade > 70:
    console.log("Grade B")
    break
  case grade > 60:
    console.log("Grade C")
    break
  case grade > 50:
    console.log("Grade D")
    break
  case grade < 50:
    console.log("Grade F")
    break
}

let month = prompt("Enter month:", )

switch (true){
  case month  == "September":
  case month  == "October":
  case month == "November":
    console.log("The season is Autumn")
    break
  case month == "December":
  case month == "January":
  case month == "February":
    console.log("The season is Winter")
    break
  case month == "March":
  case month == "April":
  case month == "May":
    console.log("The season is Spring")
    break
  case month == "June":
  case month == "July":
  case month == "August":
    console.log("The season is Summer")
    break
}

let dayin = prompt("What is the day today?", )
let day = dayin.toLowerCase()
switch(day){
  case day = "monday":
  case day = "teusday":
  case day = "wednesday":
  case day = "thursday":
  case day = "friday":
    console.log(`${day} is a working day`)
    break 
  case day = "saturday":
  case day = "sunday":
    console.log(day + " is a weekend")
}

//Revisit
/*

Exercises: Level 3
Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
Write a program which tells the number of days in a month, now consider leap year.

*/