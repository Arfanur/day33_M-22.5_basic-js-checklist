// 1.1 Write Number variable

const num = 1939;
console.log(num);
console.log(typeof (num));

console.log('');

// 1.2 Write string variable

const stri = 'Check string';
console.log(stri);
console.log(typeof (stri));

console.log('');

// 1.3 Write Boolean variable

const bool = true;
console.log(bool);
console.log(typeof (bool));

console.log('');

// 2. Write variable with changing value which can

let chan = 3823;
chan = 100;
console.log(chan);

console.log('');

// 3. Simple Math Operation

const num1 = 30;
const num2 = 20;

const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const divi = num1 / num2;
const modu = num1 % num2;

console.log(add);
console.log(sub);
console.log(mult);
console.log(divi);
console.log(modu);

console.log('');

// 4. conparison

const num3 = 50;
const num4 = 30;
console.log(num3 < num4);
console.log(num3 > num4);
console.log(num3 == num4);
console.log(num3 != num4);
console.log(num3 <= num4);
console.log(num3 >= num4);

console.log('');

// 5. Two conditions. "case-1: fulfil both conditions."

const gotJob = true;
const moneySaved = 14000;
const hasFlat = false;
if (gotJob == true && moneySaved > 10500) {
    console.log('Cholo bia kori');
}
else {
    console.log('Tor kopale biya nai');
}
// 5.1 Two conditions. "case-2: Fulfil at least one condition"

if (moneySaved > 11000 || hasFlat == true) {
    console.log('Mair khaite chao');
}
else {
    console.log('Bia korte ki khub moja');
}

console.log('');


// 6 if else

if (moneySaved > 101000 || hasFlat == true) {
    console.log('Mair khaite chao');
}
else {
    console.log('Bia korte ki khub moja');
}

console.log('');

// 7. while loop to display 7 to 19 all numbers. only display numbers including 7 to 19

let num5 = 7; // loop variable
while (num5 <= 19) {
    console.log(num5);

    num5 += 2;
}

console.log('');



// 8. declare an array. number of elements. update or change 4th position element. add or remove elements. check whether specific value exists  in the array

var num6 = [29, 'tia', 38, 54, 19, 38, 383, 23];

console.log(num6.length);   // Checking length

console.log(num6);
num6[3] = 44;

console.log(num6);
num6.pop();         // Remove last element

console.log(num6);
num6.push(380, 'riya');     // add a element in last

console.log(num6);

console.log(num6.indexOf(54));  // checking a elemnet existence in array

if (num6.indexOf(454) != -1) {
    console.log('Element Exist');
}
else {
    console.log('Element Not Exist');
}

console.log('');

// 9. use any for loop to display every elements of an array
const mess = ['Emdad', 'Elius', 'al-amin', 'Nur-Islam Vai', 'Stoic Fulmia', 'Ferdous disco 22', 'al-amin'];
for (const borderName of mess) {
    console.log(borderName);
}

console.log('');




// 10. you have an array of numbers. display only the number bigger than 80


// function largestElement(numbers) {
//     let largest = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         // console.log(i, element);
//         if (element > largest) {
//             largest = element;
//         }
//     }
//     return largest;
// }

const num7 = [23, 38, 20, 37, 30289, 49, 51, 27, 61, 77, 289, 200, 1003];


let returnLarger = (arr, num) => arr.filter(n => n > num);

console.log(returnLarger(num7, 80));



// const largestNum = largestElement(num7);
// // console.log(largestNum);


// let largest = num7[0];

// for (let i = 0; i < num7.length; i++) {
//     if (num7[i] > largest) {
//         largest = num7[i];
//     }
// }
// console.log(largest);


console.log('');

// 11. Write a function that takes three numbers numbers and returns the multiplication of the three numbers

function multiplyThreeNum(para1, para2, para3) {
    const multiply = para1 * para2 * para3;
    return multiply;
}
const result = multiplyThreeNum(5, 10, 5);
console.log(result);

console.log('');

// 12. Declare an object and change any property of that object

let buyGift = {
    name: 'Vanga Khat',
    price: 38880,
    quantity: 3
};
console.log(buyGift);
buyGift.price = 40500;
console.log(buyGift);

console.log('');

