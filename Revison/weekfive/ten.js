/*

Create a method sayHello/say_hello/SayHello that takes 3 arguments: a name (an array), a status (city), and a state.

Example:


sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

This example will return the string:
Hello, John Smith! Welcome to Phoenix, Arizona!

---
*/
function name(s) {
    let test = s.map((e) => {
        return `Hello ,${e} Welcome to Phonex Arizona`

    })
    return test;
}