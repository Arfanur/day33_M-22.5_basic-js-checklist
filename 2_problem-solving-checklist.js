// 1. conversion feetToInch
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const resultInch = feetToInch(1);
console.log('conversion to feetToInch :', resultInch);


console.log('');

// 2. conversion centimeterToMeter
function centimeterToMeter(centimeter) {
    const meter = centimeter / 100;
    return meter;
}
const resultMeter = centimeterToMeter(550);
console.log('conversion to centimeterToMeter :', resultMeter);


console.log('');

// 3. calculation
//      pageRequirments

// book1 has 100 pages      quantity: 5
// book2 has 200 pages      quantity: 7
// book3 has 300 pages      quantity: 10

// question is how much total page ?

// book1Quantity = 5;
// book2Quantity = 7;
// book3Quantity = 10;

function pageRequirments(book1Quantity, book2Quantity, book3Quantity) {
    const book1Pages = 100;
    const book2Pages = 200;
    const book3Pages = 300;

    // bookPages calculation

    const book1Print = book1Pages * book1Quantity;
    const book2Print = book2Pages * book2Quantity;
    const book3Print = book3Pages * book3Quantity;

    // Total Pages

    const totalPages = book1Print + book2Print + book3Print;
    return totalPages;
}

const pageCalculation = pageRequirments(5, 7, 10);
console.log(pageCalculation);


console.log('');

// 4. friends name array
// function name : bestFriend
// figure out long name in that array


function bestFriend(a) {
    let largestName = a[0];
    for (let name of a) {
        if (name.length > largestName.length) {
            largestName = name;
        }
    }
    return largestName;
}

let friendsName = ['akash', 'batash', 'kakash', 'natash', 'talashes', 'kakases', 'muradses', 'dontIdiot', 'idiot', 'shohelIdiot6Number'];
let largest = bestFriend(friendsName);
console.log('largest name of friend :', largest);

console.log('');


// let largestName = friendsName[0];

// for (let name of friendsName) {
//     if (name.length > largestName.length) {
//         largestName = name;
//     }
// }
// console.log('largest Name : ', largestName);




// 5. will stop the loop if the array has any negative number and returns all the posithve number before the negative number
// function name : onlyPositive

let num8 = [10, 18, 22, 30, 2, 30, 28, 39, -38, -73, 38, -99, 333, -993];
function onlyPositive(numbers) {
    let positives = [];
    for (let element of numbers) {
        if (element < 0) {
            break;
        }
        else if (element > 0) {
            positives.push(element);
        }
    }
    return positives;
}
console.log('positive numbers, before negetive number, Array:', onlyPositive(num8));

// let positiveNumber = onlyPositive(num8);
// console.log(positiveNumber);