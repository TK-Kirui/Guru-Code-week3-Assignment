//QUESTION ONE
const number = "45"
let numb=Number(number)  // Converting string number explicitly into a number using a Number() function
console.log(numb)        


 //QUESTION TWO
 const printSum = parseInt("20") + 40 // Parsinga string to an integer
 const sentence = "I am " + (23 + 4) + " years old" //Put it in a brackets so that to do numeric addition before concartinating it with the strings.
 console.log(printSum)
 console.log(sentence)


//QUESTION THREE
const myVaue = "May";   
let myValue = 86;    //added 'let' to prevent it from being a global variable  



//QUESTION FOUR
const firstName = "Titus"
const lastName = "Kirui"
const guruCodingCourse = "javaScript"
let testScores = 68


//QUESTION FIVE
//Note: The variable "testScores" referred in this question is the one declared in question 4 above
if (testScores < 30)
testScores="Failed"      //Initializing the the variable 'testScores' to a String such that it should be displayed in the console terminal incase it meets the condition
    else if(testScores >= 31 && testScores <= 40 )
    testScores=("The Grade is E")                  //
   else if(testScores >= 41 && testScores <= 49 )
   testScores="The Grade is D"                    //
    else if(testScores >= 50 && testScores <= 59 ) //Conditions
    testScores="The Grade is C"
    else if(testScores >= 60 && testScores <= 69 )
   testScores="The Grade is B"
    else if(testScores >= 70 && testScores <=100 )
    testScores="The Grade is A"
   else if(testScores < 0 )
   testScores="No Test Score!"                   //
    else
    testScores="The Score is Out of Range!"
    console.log("Dear "+firstName+" "+lastName+"! "+testScores+". "+"Thank you for participating in "+guruCodingCourse+" Guru Coding Course.")


    //QUESTION SIX
    let count = 1  //declared variable named count and initialises it to 1
    for (count = 1; count<=20;count ++) //initialized 'count' to 1 and the loop will keep incrementing by 1 continue as long as 'count' is less or equal to 20
    process.stdout.write(count +" ") //Did research on how to print the output horizontally
    



