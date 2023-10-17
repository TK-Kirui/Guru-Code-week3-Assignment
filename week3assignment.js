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
const testScores = 70


//QUESTION FIVE
if (myValue < 30)
myValue="Failed"      //Initializing the the variable 'myValue' to a String such that it should be displayed in the console terminal incase it meets the condition
    else if(myValue >= 31 && myValue <= 40 )
    myValue=("The Grade is E")                  //
   else if(myValue >= 41 && myValue <= 49 )
   myValue="The Grade is D"                    //
    else if(myValue >= 50 && myValue <= 59 ) //Conditions
    myValue="The Grade is C"
    else if(myValue >= 60 && myValue <= 69 )
    myValue="The Grade is B"
    else if(myValue >= 70 && myValue <=100 )
    myValue="The Grade is A"
   else if(myValue < 0 )
   myValue="No Test Score!"                   //
    else
    myValue="The Score is Out of Range!"
    console.log("Dear "+firstName+" "+lastName+"! "+myValue+". "+"Thank you for participating in "+guruCodingCourse+" Guru Coding Course.")


    //QUESTION SIX
    let count = 1  //declared variable named count and initialises it to 1
    for (count = 1; count<=20;count ++) //initialized 'count' to 1 and the loop will keep incrementing by 1 continue as long as 'count' is less or equal to 20
    process.stdout.write(count +" ") //Did research on how to print the output horizontally
    



