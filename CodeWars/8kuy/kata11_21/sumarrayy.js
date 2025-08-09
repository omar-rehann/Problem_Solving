/*
function sumMix(x){
let test=Array.from(x);
    let result=test.reduce(function(one,two){
        return +one + +two;
    })
    return Number(result);
}
console.log(sumMix([6,1,'2',3,4]))

*/
function sumMix(x) {
    let test = Array.from(x);
    let result = test.reduce(function(one, two) {
        return +one + +two;
    })
    return Number(result);
}
console.log(sumMix([6, 1, '2', 3, 4]))