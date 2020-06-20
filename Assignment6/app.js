// CHAP 21-25 TASK 1 //
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName + lastName;
alert("Hello! "+fullName);


// CHAP 21-25 TASK 2 //
var favPhone = prompt("Enter your Favourite Phone");
var length = favPhone.length;
document.write("<div> My Favourite phone is: "+favPhone +" <br> Length of String: " +length +"</div>");



// CHAP 21-25 TASK 3 //
var nationality ="Pakistani";
var index = nationality.indexOf("n");
document.write("<div> String: "+nationality +" <br> Index of 'n': " +index +"</div>");


// CHAP 21-25 TASK 4 //
var variable ="Hello World";
var index = variable.lastIndexOf("l");
document.write("<div> String: "+variable +" <br> Last Index of 'l': " +index +"</div>");



// CHAP 21-25 TASK 5 //
var nationality ="Pakistani";
var index = nationality.charAt(3);
document.write("<div> String: "+nationality +" <br> Character at index 3: " +index +"</div>");



// CHAP 21-25 TASK 6 //
var firstName = prompt("Enter First Name");
var lastName = prompt("Enter Last Name");
var fullName = firstName.concat(lastName, " ")
alert("Hello! "+fullName);




// CHAP 21-25 TASK 7 //
var city = "Hyderabad";
var replacedCity = city.replace("Hyder", "Islam")
document.write("<div> City: "+city +" <br> After Replacement: " +replacedCity +"</div>");




// CHAP 21-25 TASK 8 //
var message = "Ali and Sami are best friends. They play cricket and football together."; 
var replacement = message.replace(/and/g, "&")
document.write("<div> "+message +" <br><br><br> After Replacement: <br>" +replacement +"</div>");



// CHAP 21-25 TASK 9 //
var string = "472";
var number = parseInt(string);
document.write("<div> Value: "+string +" <br> Type: " +typeof(string) +" <br> Value: " +number +" <br> Type: " +typeof(number) +"</div>");



// CHAP 21-25 TASK 10 //
var input = prompt("Enter any Dry Fruit");
var changeCase = input.toUpperCase();
document.write("<div> User Input: "+input +" <br> Upper Case: " +changeCase +"</div>");



// CHAP 21-25 TASK 11 //
var input = prompt("Enter any Dry Fruit");
var first = input.slice(0,1);
first = first.toUpperCase();
var second = input.slice(1);
second = second.toLowerCase();
changeCase = first + second;
document.write("<div> User Input: "+input +" <br> Title Case: " +changeCase +"</div>");




// CHAP 21-25 TASK 12 //
var num = 35.36;
var str = num.toString();
str = str.replace(".","")
document.write("<div> Number: "+num +" <br> Result: " +str +"</div>");



// CHAP 21-25 TASK 13 //
var user = prompt("Enter Username");
 for( var i = 0; i < user.length; i++){
     if (user[i] === "@" || user[i] === "," || user[i] === "." || user[i] === "!" ){
         alert("Please Enter a Valid Password");
         break;
     }
 }

 

// CHAP 21-25 TASK 14 //
var A = ["CAKE", "APPLE PIE", "COOKIE", "CHIPS", "PATTIES"];
var order = prompt("Welcome to ABC Bakery. What do you want to order?");
order = order.toUpperCase();
var index = -1;
var item = "";
for(var i = 0; i< A.length; i++){
    if(order === A[i]){
        item = A[i];
        index = i;
        break;
    }
    
}
if(index != -1 && item != ""){
    document.write("<div> "+order +" is available at index "+i +" in our Bakery. </div>");
}

else{
    document.write("<div> We are Sorry. "+order +" is not available in our Bakery </div>");
}


// CHAP 21-25 TASK 15 //
var Password = prompt("Enter Password");
for( var i = 0; i < Password.length; i++){
    if( Password.slice(0) >= 'A' && Password.slice(0) <= 'Z' || Password.slice(0) >= "a" && Password.slice(0) <= 'z')
    {
        if( Password[i] >= 'A' && Password[i] <= 'Z' || Password[i] >= "a" && Password[i] <= 'z' || Password[i] >= 0 && Password[i] <= 9)
        {
             if(Password.length >= 6)  
                {
                    alert('Strong Password..!');
                }
             else{
                alert('Password must be atleast 6 characters long..!');
                break;
             } 

        }
        else{
            alert("Password must contains only characters and numbers...!");
            break;
        }
    }
    else{
        alert("Password can not begin with a Number or Character. \nPlease Enter a Valid Password");
        break;
    }
}



// CHAP # 21-25 TASK 16 //
var university = "University of Karachi";
var uni = university.split("");
document.write("<div> ")
for(var a=0; a < uni.length; a++){
    document.write("<br>" +uni[a] )
}
document.write("</div> ");




// CHAP # 21-25 TASK 17 //
var input = prompt("Enter you Country");
var lastChar = input.charAt(input.length-1);
alert("Last character of input: " +lastChar)



// CHAP # 21-25 TASK 18 //
var string = "The quick brown fox jumps over the lazy dog";
var count = 0;
for(var i = 0; i < string.length; i++){
    if (string.slice(i,i+3) === "the" || string.slice(i,i+3) === "The"){
        count=count+1;
    }
}
document.write("<div> Text: "+string +" <br> There are " +count +" occurence(s) of word 'the'." +"</div>");






// CHAP 26-30 TASK 1 //
var num = prompt("Enter any positive integer?");
var round = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);
document.write("<div> Number: "+num +" <br> Round Off Value: " +round +"<br> Ceil Value: " +ceil +"<br> Floor Value: " +floor +"</div>");




// CHAP 26-30 TASK 2 //
var num = prompt("Enter any Negative Integer?");
var round = Math.round(num);
var ceil = Math.ceil(num);
var floor = Math.floor(num);
document.write("<div> Number: "+num +" <br> Round Off Value: " +round +"<br> Ceil Value: " +ceil +"<br> Floor Value: " +floor +"</div>");



// CHAP 26-30 TASK 3 //
var num = prompt("Enter any integer?");
var absolute = Math.abs(num);

document.write("<div> Number: "+num +" <br> Absolute Value: " +absolute +"</div>");



// CHAP 26-30 TASK 4 //
var randonDice = Math.random();
var dice = randonDice * 6;
dice = Math.ceil(dice);
alert("Random Dice Value: " +dice);




// CHAP 26-30 TASK 5 //
var randonCoin = Math.random();
var coin = randonCoin * 2;
coin = Math.ceil(coin);
if( coin === 2){
    alert(+coin +"\nRandom Coin Value: Heads");
}
else{
    alert(+coin +"\nRandom Coin Value: Tails");
}



// CHAP 26-30 TASK 6 //
var random = Math.random();
var num = random * 100;
num = Math.floor(num);
document.write("<div> Random Number between 1 and 100: "+num +"</div>");
 


// CHAP 26-30 TASK 7 //
var weight = prompt("Enter your weight in kgs?");
weight = parseFloat(weight);
document.write("<div> The weight of user is: "+weight +" kilograms </div>");
 



// CHAP 26-30 TASK 8 //
var secret = Math.random() * 10;
secret = Math.ceil(secret);
var guess = prompt("Guess a Number between 1 to 10?");
if ( guess === secret){
    alert("Congratulations...!");
}
else{
    alert("Sorry! Try Again..!")
}




// CHAP 31-34 TASK 1 //
var today = new Date();
document.write("<div>" +today +"</div>");




// CHAP 31-34 TASK 2 //
var monthsName = ["January", "Feburary", "March", "April", 'May', "June", "July", "August", "Septembe", "October", "November", "December"];
var today = new Date();
var month = today.getMonth();
alert(monthsName[month]);


// CHAP 31-34 TASK 3 //
var date = new Date();
var today = date.toString();
var day = today.slice(0,3);
alert("Today is " +day);



// CHAP 31-34 TASK 4 //
var date = new Date();
var day = date.getDay();
if(day === 0 || day === 1){
    alert("It's a Fun Day");
}
else{
    alert("It's a Working Day");
}



// CHAP 31-34 TASK 5 //
var date = new Date();
var day = date.getUTCDate();
if( day < 16 ){
    alert("First fifteen days of the month");
}
else{
    alert("Last days of the month");
}



// CHAP 31-34 TASK 6 //
var date = new Date();
alert(date.getHours());
var miliseconds = date.getTime();
var minutes = miliseconds / (60*60);
document.write("<div> Current Date: "+date +"<br> Elapsed Miliseconds since January 1, 1970: "+miliseconds +"<br> Elapsed Minutes since January 1, 1970: " +minutes +"</div>");




// CHAP 31-34 TASK 7 //
var date = new Date();
var hour = date.getHours();
if( hour < 12 ){
    alert("It's AM");
}
else{
    alert("It's PM");
}



// CHAP 31-34 TASK 8 //
var laterDate = new Date("Dec 31, 2020");
document.write("<div> Later Date: " +laterDate +"</div>");



// CHAP 31-34 TASK 9 //
var d = new Date("Jun 18, 2015");
var dMili = d.getTime();
var date = new Date();
var mili = date.getTime();
var difference = mili - dMili;
var totalDays = difference / ( 1000 * 60 * 60 * 24 );
totalDays = Math.round(totalDays);
document.write("<div>" +totalDays +" days have passed since 1st Ramdan, 2015" +"</div>");




// CHAP 31-34 TASK 10 //
var d = new Date("Jan 1, 2015");
var dMili = d.getTime();
var refDate = new Date("Dec 5, 2015");
var refMili = refDate.getTime();
var difference = refMili - dMili;
difference = difference / (1000 * 60);
difference = Math.round(difference);
document.write("<div> On Reference Date " +refDate +", " +difference +" secons have passed since begining of 2015" +"</div>");




// CHAP 31-34 TASK 11 //
var date = new Date();
document.write("<div> Curent Date : " +date +" 1 hour ago, it was "); 
var hour = date.getHours();
date.setHours(hour - 1);
document.write( date +" </div>")



// CHAP 31-34 TASK 12 //
var date = new Date();
document.write("<div> Curent Date : " +date +" 100 years ago, it was "); 
var year = date.getFullYear();
date.setFullYear(year - 100);
document.write( date +" </div>")



// CHAP 31-34 TASK 13 //
var age = prompt("Enter your Age?");
var date = new Date();
var year = date.getFullYear();
var birthYear = year - age;
document.write("<div> Your Age is " +age +"<br> Your Birth Year is " +birthYear +"</div>");



// CHAP 31-34 TASK 14 //
var customerName = prompt("Enter User Name?");
var month = prompt("Enter Month");
var units = 410.44789;
var charges = 16;
var chargesDue = units * charges;
var payable = chargesDue;
var lateCharges = 350;
var chargesAfter = lateCharges + payable;
var afterDue = chargesAfter.toFixed(2);
document.write("<div> <h1> K - Electric Bill </h1> <br> Customer Name: "+customerName +" <br> Month: "+month + " <br> Number of Units: "+units +"<br> Charges per unit: "+charges +" <br><br> Net Amount Payable ( within Due Date): " +payable + " <br> Late Payment Charges "+lateCharges + "<br> Gross Amount Payable ( after Due Date): "+afterDue +"</div>");





// CHAP # 34-38 TASK 1 //
function displayDate () {
    var date = new Date();
    document.write("<div>" +date +"</div>");
}
displayDate();


// CHAP # 34-38 TASK 2 //
function greet (firstName, lastName){
    firstName = prompt("Enter First Name");
    lastName = prompt("Enter Last Name");
    var fullName = firstName + " " + lastName;
    alert("Hello! "+fullName);
}
greet();
 


// CHAP # 34-38 TASK 3 //
function sum (a, b){
    var c = a + b;
    return c;
}
var first = +prompt("Enter First Number");
var second = +prompt("Enter Second Number");
alert(sum (first, second));




// CHAP # 34-38 TASK 4 //
function calculator (num1 , num2 , operator ) {
 if(operator === "+")
 {
    return num1 + num2;
 }
 else if(operation === "-")
 {
    return num1 - num2;
 }
 else if(operation === "*")
 {
    return num1 * num2;
 }
 else if(operation === "/")
 {
    return num1 / num2;
 }
 else if(operation === "%")
 {
    return num1 % num2;
 }
 
}

var firstNumber = +prompt("Enter First Number");
var secondNumber = +prompt("Enter Second Number");
var operation = prompt("Enter Operation" , "Like (+, -, *, /, %) ");
document.write("<div> "+firstNumber +" " + operation +" "+secondNumber +" = " +calculator(firstNumber, secondNumber, operation) +"</div>");




// CHAP # 34-38 TASK 5 //
function square (number){
    return number * number;
}




// CHAP # 34-38 TASK 6 //
function factorial (number) {
    var fact = 1;
    for (var i = number; i >= 1; i--){
        fact = fact * i;
    }
    return fact;
}

document.write("<div> Factorial of 6 = " +factorial(6) +"</div>");



// CHAP # 34-38 TASK 7 //
function counting ( start, end ){
    document.write("<div> ");
    for (var i = start; i <= end; i++)
    {
        document.write(" &nbsp " +i);
    }
    document.write("</div> ");
}
counting(20, 100);



// CHAP # 34-38 TASK 8 //
function Hypotenuse ( base, perp){
    var hyp = square(base) + square(perp);
    return hyp;

}
var base = +prompt("Enter Base of a Triangle ");
var perp = +prompt("Enter Perpendicular of a Triangle ");
document.write("<div> Hypotenuse of Triangle = " +Hypotenuse(base, perp) +"</div>");




// CHAP # 34-38 TASK 9 //
function area( width , height){
    var A = width * height;
    return A;
}
    // Passing Arguements as Values //
    document.write("<div> Area = " + area ( 7, 3) +"</div>");

    // Passing Arguements as Variables //
    var width = +prompt("Enter Width");
    var height = +prompt("Enter Height");
    document.write("<div> Area = " + area ( width, height) +"</div>");




// CHAP # 34-38 TASK 10 //
function checkPalindrome( string ) {
    var reverse = "" ;
    for ( var i = string.length - 1; i >= 0; i--){
        reverse += string[i];
    }
    if ( reverse === string){
        alert("The given String is Palindrome");
    }
    else{
        alert("The given String is not Palindrome");
    }
    
}
var str = prompt("Enter any String"); 
checkPalindrome(str);



// // CHAP # 34-38 TASK 11 //
function titleCase(str) {
    var result= str.split(" ");
      
    
    for(var i = 0; i < result.length; i++) {
    result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1, result[i.length]);
    }
    return result.join(" ");
    }
    document.write("<div> "+titleCase("the quick brown fox") + "</div>");



// CHAP # 34-38 TASK 12 //
function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    var word = "";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
      word = strSplit[i];
       }
    }
    return word;
  }
  var string = prompt('Enter a String');
  document.write("<div> String: " +string + "<br> The longest Word is "+findLongestWord(string) +"</div>");




// CHAP # 34-38 TASK 13 //
function occurence(string, letter){
    var count = 0;
        for(var i = 0; i < string.length; i++){
             if (string.slice(i,i+1) === letter){
             count=count+1;
            }
        }
    return count;

}
var string = "JSResourceS.com";
var char = 'o';
document.write("<div> Text: "+string +" <br> There are " +occurence(string,char) +" occurence(s) of letter " +char + "</div>");




// CHAP # 34-38 TASK 14 //
function calcCircumference( radius){
     var circum = 2 * 3.14 * radius;
     document.write("<div> The Circumference of Circle: " +circum + "</div>");
}
function calcArea( radius){
    var area = 3.14 * 3.14 * radius;
    document.write("<div> The Area of Circle: " +area + "</div>");
}
var r = +prompt("Enter Radius of Circle");
calcCircumference(r);
calcArea(r);

