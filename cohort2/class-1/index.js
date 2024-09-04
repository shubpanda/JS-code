// 1. write a program to greet a person based on their first and last name

let firstName = "shubham";
let lastName = "rout";

console.log(`good morning ${firstName} ${lastName} have a good day!`);


// 2. write a program that greets a person based on the gender by using loop

let maleName = "shubham rout";
let femaleName = "rajshree ranjan";

let genderIs = false ; //convention for true we have set to be male

if(genderIs){
    console.log(`good morning MR ${maleName}`);
    
}
else{
    console.log(`good morning Miss ${femaleName}`);
    
}


// 3. write a program and that counts from 0 to 1000 and prints


for (i=0; i<=1000; i++){
    // console.log(i);
    
}

// 4. write a program to write all the even number in the array

const arr = [1,2,3,4,5,6,7,8,9,10];
const numberOfPpl =  arr.length;

for(i=0; i < numberOfPpl; i++){
    if(arr[i] % 2 == 0){
        // console.log(arr[i]);
        
    }
}

// 5. write a program to write all the odd number in the array

const arr1 =[1,2,3,4,5,6,7,8,9];
const numbofArr = arr1.length;

for (i=0; i < numbofArr; i++){
    if(arr1[i] % 2 == 1 ){
        // console.log(arr1[i]);
        
    }    
}

// 6. write the program to find the biggest number in a array

const givenNumber = [1,2,3,4,5,6,7,8,9];
let largestNumber = givenNumber[0];
for(i=1; i < givenNumber.length; i++){
    if(givenNumber[i] > largestNumber){
        largestNumber = givenNumber[i];
    }
    
}
console.log(`the largest number in the given array is ${largestNumber}`);

// 7. write a program where the gender of the user is male/female name based on the gender

let nameArr = ["shubham", "rajshree"];
let genderArr =["male" , "female"];
let numberOfUsers = genderArr.length ;

for(let i=0; i < numberOfUsers; i++){
    if(`genderArr[i] == "male"`){ // equal to (==)
        console.log(`the user is male ${nameArr[i]}`);
    }
    else {
        console.log(`the user is female ${nameArr[i]}`);
        
    }
}

// 8. write a program having a complex array consisting of objects and print the name of the user on the basis of gender


const allUsers = [{
    name: "shubham",
    age: 18,
    gender: "male",
},{
    name: "nitin",
    age: 19,
    gender: "male",
},{
    name: "rajshree",
    age: 19,
    gender: "female",
}]

numOfAllUsers = allUsers.length ;

for (let i=0; i < numOfAllUsers; i++){
    if(allUsers[i]["gender"] == "female"){
        // console.log(`the user found is female and her name is ${allUsers[i]["name"]}`);
        
    }
}


// 9. write a program that prints all the males first name in a complex object


for(let i=0; i < numOfAllUsers; i++){
    if(allUsers[i]["gender"] == "male"){
        // console.log(`the user found is male and his name is ${allUsers[i]["name"]}`);
        
    }
}

// 10. write a program that reverses all the elements in array

allUsers.reverse(); //reverse() is a method of js which can be used to reverse the elements of the array.
// console.log(allUsers);

// 11. write a program that add two values adn return it 

function sum(a,b){ //function decalaration 
    const sumValue = a + b ; //assign the added value in sumValue 
    return sumValue; // will return the value stored in sumValue when the function is called
}

const value1 = sum(1,2); //function is called with value of a = 1 & b = 2
const value2 =  sum(100 ,200);
console.log(value1);
console.log(value2);


// Callbacks !!

function sum(num1, num2, funcToCall) {
    let result = num1 + num2;
    funcToCall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
// How will you displayResult of a sum
console.log(1, 2, displayResult);



// example of callback function 

function calculateArithmetic(a, b,arithmeticFinalFunction) {
    const ans = arithmeticFinalFunction(a,b);
    return ans;
}

function sum(a, b){
    return a+b;
}

const value = calculateArithmetic(1, 2, sum);
console.log(value);


