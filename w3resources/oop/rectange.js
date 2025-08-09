// 🟦 Rectangle Class with Area and Perimeter
// Write a JavaScript program to create a class called 'Rectangle'
// with properties for width and height. Include two methods
// to calculate rectangle area and perimeter. Create an instance of
// the 'Rectangle' class and calculate its area and perimeter.

class Rectangle {
    constructor(width, height) {
        this.w = width;
        this.h = height;
    }

    getArea() {
        return this.w * this.h;
    }

    getPerimeter() {
        return 2 * (this.w + this.h);
    }
}

let one = new Rectangle(5, 7);

console.log(`The Width = ${one.w}`);
console.log(`The Height = ${one.h}`);
console.log(`The Area = ${one.getArea()}`);
console.log(`The Perimeter = ${one.getPerimeter()}`);

let two = new Rectangle(10, 4);
console.log("\n--- Second Rectangle ---");
console.log(`The Width = ${two.w}`);
console.log(`The Height = ${two.h}`);
console.log(`The Area = ${two.getArea()}`);
console.log(`The Perimeter = ${two.getPerimeter()}`);