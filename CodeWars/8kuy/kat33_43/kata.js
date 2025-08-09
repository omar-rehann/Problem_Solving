/*
📦 Problem: Calculate the Volume of a Box

Description:  
Create a class named `kata` that contains a static method `getvolume`.  
This method should take three parameters: `l` (length), `w` (width), and `h` (height), and return the volume of a box calculated by multiplying the three values.

Requirements:
- Use a static method inside the class.
- Return the result of `l * w * h`.

Function Signature:
class kata {
    static getvolume(l, w, h)
}

Example:
kata.getvolume(2, 3, 4); // ➞ 24
kata.getvolume(1, 5, 6); // ➞ 30

Constraints:
- All inputs will be positive integers.


 */
class kata {
    static getvolume(l, w, h) {
        return l * w * h;
    }
};
console.log(kata.getvolume(2, 3, 4))