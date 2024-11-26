// ---------------------------------------------- Rest parameter
// Rest Parameter should always be the last parameter
// Rest Parameter is an array of values

function Average(...args: number[]): number {
    if (args.length > 0) {
        let sum = args.reduce((x, y) => x + y);
        return sum / args.length;
    } else {
        return 0;
    }
}

console.log(Average());
console.log(Average(1));
console.log(Average(1, 2));
console.log(Average(1, 2, 3, 4, 5));
console.log(Average(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Combine comma seperated items into a Array (...) - Rest Parameter
// ... used in function parameter at the time of function creation - Rest Parameter
// ... on Left hand side of assignment operator - Rest Parameter

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Average(numbers));          // Argument of type 'number[]' is not assignable to parameter of type 'number'.
console.log(Average(...numbers));          // Spread Operator - Array Spread Operator

// Split Array/Object to a comma seperated items - Spread Operator
// ... used in function call - Spread Operator
// ... on Right hand side of assignment operator - Spread Operator