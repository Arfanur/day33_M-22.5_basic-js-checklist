// 1. conversion feetToInch
function feetToInch(feet) {
    const inch = feet * 12;
    return inch;
}
const resultInch = feetToInch(1);
console.log('conversion to feetToInch :', resultInch);


console.log('');
// conversion centimeterToMeter
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

// 4. friends
// add