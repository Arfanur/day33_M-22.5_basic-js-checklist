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

