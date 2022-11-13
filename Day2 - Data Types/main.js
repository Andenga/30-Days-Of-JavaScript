let challange = "30 Days Of JavaScript"
console.log(challange)
console.log(challange.length)
console.log(challange.toUpperCase())
console.log(challange.toLowerCase())
console.log(challange.substring(3))
console.log(challange.substring(3, 23))
console.log(challange.includes("Script"))
console.log(challange.split())
console.log(challange.split(" "))
let x = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon"
console.log(x.split(","))
console.log(challange.replace("JavaScript", "Python"))
console.log(challange.charAt(15))
console.log(challange.charCodeAt("J"))
console.log(challange.indexOf("a"))
console.log(challange.lastIndexOf("a"))
let s = "You cannot end a sentence with because because because\
 is a conjunction"
 console.log(challange.indexOf("because"))
 console.log(challange.lastIndexOf("because"))
 console.log(challange.trim())
 console.log(challange.startsWith(30))
 console.log(challange.endsWith("of JavaScript"))
console.log(challange.match("a"))
console.log(challange.repeat(2))
let a = "30 Days of"
console.log(a.concat("JavaScript lol"))

//Exercise: Level 2
console.log("The quote \'There is no exercise better exercise  for the\
heart reaching down and lifting people up.\' by John Holmes teaches us to \
help one another")
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. \
Charity and love are the same -- with charity you give love, so don\'t just give money but\
 reach out your hand instead.")
let q = "10"
let ty = console.log(typeof(q))
console.log(ty == 10)
let numq = parseInt(q)
let typeq = console.log(typeof(numq))
let typeten = console.log(typeof(10))
console.log(typeq == typeten)
let floatnum = parseFloat("9.8")
console.log(typeof(floatnum))
console.log(Math.round(9.8))
let py = "python"
let ja = "jargon"
console.log(py.includes("on"))
console.log(ja.includes("on"))
let sentence = "I hope this course is not full of jargon"
console.log(sentence.includes("jargon"))
console.log(Math.floor(Math.random() * 101))
console.log(Math.floor(Math.random() * 101) + 50)
function getrandno(min, max){
    return Math.floor( Math.random() * (max - min) + min)
}
console.log(getrandno(50, 101))
function getrandint(max){
    return Math.random() * max
}
console.log(getrandint(256))
//Revisit 
//Access the 'JavaScript' string characters using a random number. 
const characters ='JavaScript'
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result
}
console.log(generateString(10))
//End of revisit
console.log(" \
1\t1\t1\t1\t1\n\
2\t1\t2\t4\t8\n\
3\t1\t3\t9\t27\n\
4\t1\t4\t16\t64\n\
5\t1\t5\t25\t125\n "
)

let x_sentence = "You cannot end a sentence with because because because is a conjunction"
console.log(x_sentence.substring(30, 55))

//Exercises: Level 3

let love_sentence = "Love is the best thing in this world. Some found their love and some are sill looking for \
 their love"
 let pattern = /love/gi
console.log(love_sentence.match(pattern))

let second_pattern = /because/gi 
console.log(x_sentence.match(second_pattern))

//Revisit 
//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const symbol_sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; \
 &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re \
  interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is \
  30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'

  console.log(symbol_sentence.replace(/[^a-zA-Z0-9 ]/g, ""))

 
/*Calculate the total annual income of the person by extracting the numbers from the following text.
 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' */
let income_sentence = "He earns 5000 euro from salary per month, 10000 euro annual\
 bonus, 15000 euro online courses per month."
 let salary = console.log(income_sentence.match(/\d+/g))
 console.log(salary)

  //End of revisit 