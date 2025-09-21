/*

Do you speak retsec?
You and your friends want to play undercover agents. In order to exchange your secret messages, you've come up with the following system: you take the word, cut it in half, and place the first half behind the latter. If the word has an uneven number of characters, you leave the middle at its previous place:


*/

function reverseByCenter(s) {
    let test = Array.from(s);
    let length = test.length;
    let one, two, number, odd, three;
    if (length % 2 == 0) {
        number = length / 2;
        one = test.slice(0, number);
        two = test.slice(number);
        three = two.concat(one)
    } else {
        number = Math.floor(length / 2);
        one = test.slice(0, number);
        odd = test[number];
        two = test.slice(++number);
        three = [two, [odd], one];
    }
    return three.join(",").replaceAll(",", "")
}
console.log(reverseByCenter("secret"))