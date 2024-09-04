/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n){
    const startTime = new Date().getTime(); //used to get time to milliseconds
    let sum =0 ;
    for(let i=0; i <= n; i++){
        sum += i;
    }
    const endTime = new Date().getTime(); //used to get time in milliseconds
    const timeTaken = endTime - startTime / 1000; //used to convert the time from milliseconds to seconds
    return timeTaken;
}

console.log(`sum from 1-100 is ${calculateTime(100)}`);
console.log(`sum from 1-100000 is ${calculateTime(100000)}`);
console.log(`sum from 1-1000000000 is ${calculateTime(1000000000)}`);


