/*

5. Will you make it?

Determine whether the remaining fuel is enough to reach the gas station.

*/
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return fuelLeft * mpg >= distanceToPump;
};