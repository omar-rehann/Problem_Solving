/*

### Problem Statement

There is a bus moving in the city which takes and drops some people at each bus stop.

You are given an array `stations` (a list of integer pairs). Each pair contains two numbers:

* The first number (`a`) is the number of people who get **on** the bus at that stop.
* The second number (`b`) is the number of people who get **off** the bus at that stop.

Your task is to return the number of people who are still on the bus after the last bus stop (after the last array).

#### Constraints & Notes

* Even though the bus might be empty after some stops, the number of people on the bus is never negative (the second value in each pair is never greater than the current number of passengers).
* An empty `stations` array should return `0`.

#### Example

* Input: `[[10, 0], [3, 5], [5, 8]]`
* Stop 1: `10` get on, `0` get off $\rightarrow$ `10` on the bus
* Stop 2: `3` get on, `5` get off $\rightarrow$ `8` on the bus
* Stop 3: `5` get on, `8` get off $\rightarrow$ `5` on the bus
* Output: `5`

*/

// 7 kata 
function busstop(stations) {
    let sum = 0;
    for (let i = 0; i < stations.length; i++) {
        let [a, b] = stations[i];
        let test = sum + a - b;
        sum = test
    }
    return sum
}
console.log(busstop([
    [10, 0],
    [3, 5],
    [5, 8]
]))