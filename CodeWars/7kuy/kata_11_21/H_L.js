/*

The problem this code solves
is to find the lowest and highest numbers from
a given space-separated string of numbers.



*/




function Height_lowest(number) {
    let test = number.split(" ");
    let result = test.map(function(e) {
        return +e;
    }).sort((a, b) => a - b);
    return ` The Lowest Number => ${result[0] }
    And The Large Number => ${result[result.length - 1] }`
}
console.log(Height_lowest("1 2 3 -1 -2 -3 5"));