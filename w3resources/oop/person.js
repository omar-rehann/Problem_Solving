// 🧑‍💻 Person Class with Details
// Write a JavaScript program to create a class called "Person"
// with properties for name, age, and country. Include a method to
// display the person's details. Create two instances of the 'Person' class
// and display their details.

class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }

    displayDetails() {
        return `My name is ${this.name}, I am ${this.age} years old and I'm from ${this.country}.`;
    }
}

class TwoPerson extends Person {
    constructor(name, age, country) {
        super(name, age, country);
    }
}

let one = new Person("Omar", 22, "Portsaid");
let two = new TwoPerson("Ahmed", 23, "Portsaid");

console.log(one.displayDetails());
console.log(two.displayDetails());