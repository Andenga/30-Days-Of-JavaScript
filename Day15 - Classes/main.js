class Animal {
    constructor(name, age, color, legs) {
      this.name = name
      this.age = age
      this.color = color
      this.legs = legs
    }
    getdetails() {
      const details  = this.name + ' ' + this.age + " " + this.color + " " + this.legs
      return details
    }
  }
  
const Animal1 = new Animal('goat', 250, 'black', 4)
const Animal2 = new Animal('duck',  28, 'white', 2) 
console.log(Animal1.getdetails())
console.log(Animal2)
class lion extends Animal {
    soundmade() {
      console.log('I roar and I am the king of the jungle.')
    }
  }
const l1 = new lion('Mufasa', 20, "brown", 4)
console.log(l1)
console.log(l1.soundmade())
console.log(l1.getdetails())
//Override the method you create in Animal class

class Statistics{
    constructor(ages){
        this.ages = []
    }
    getmean(){
        mean = this.ages/this.ages.length
        return mean
    }

}

/*
Exercises Level 3
Let's try to develop a program which calculate measure of central tendency of a sample
(mean, median, mode) and measure of variability(range, variance, standard deviation). 
In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. 
You can create a class called Statistics and create all the functions which do statistical calculations as
 method for the Statistics class. Check the output below.
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]


Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties
 and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
  Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
*/