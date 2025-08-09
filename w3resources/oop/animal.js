// 🐾 Animal and Dog Classes with Sound
// Write a JavaScript program that creates a class called 'Animal'
// with properties for species and sound. Include a method to make the animal's sound.
// Create a subclass called 'Dog' that inherits from the 'Animal' class and
// adds an additional property for color. Override the makeSound method to
// include the dog's color. Create an instance of the 'Dog' class
// and make it make its sound.

class Animal {
    constructor(species, sound) {
        this.species = species;
        this.sound = sound;
    }

    makeSound() {
        return `${this.species} says "${this.sound}"`;
    }
}

class Dog extends Animal {
    constructor(species, sound, color) {
        super(species, sound);
        this.color = color;
    }

    makeSound() {
        return `${this.species} (${this.color}) says "${this.sound}"`;
    }
}

let dog = new Dog("Dog", "Ho Ho Ho", "Black");
console.log(dog.makeSound());

console.log("\n--- Another Animal ---");
let cat = new Animal("Cat", "Meo Meo");
console.log(cat.makeSound());