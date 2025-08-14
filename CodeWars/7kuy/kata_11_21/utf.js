/*

In languages that use UTF-16 encoding for strings (JavaScript, JVM languages like Java, .NET languages like C#...), if the code point of a character is larger than 0xFFFF, it will be treated as two code units.

For example:

The code point of the emoji 🙉 (U+1F649, Hear-No-Evil Monkey) is 0x1F649.


*/

function getRealLength(string) {
    return [...string].length; // Fix me !
}
console.log(getRealLength("🙉"))