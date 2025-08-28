/*

Your carscost function correctly calculates the rental cost 
of a car based on the number of days, with discounts applied 
for longer rental periods. It's a common type of problem found
in coding challenges 
that involves conditional logic and simple arithmetic.


*/

function carscost(d) {
    let price = 40 * d;
    if (d < 3) return price;
    if (d >= 7) {
        return price - 50
    } else {
        return price - 20;
    }
}
console.log(carscost(50));