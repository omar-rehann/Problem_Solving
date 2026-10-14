/*

3. Hello, Name or World!
Question:  
Write a function that returns a greeting with the user’s name, formatted with the first letter uppercase and the rest lowercase (Xxxx). If the name is not provided or is an empty string, return "Hello, World!".

Examples:

hello("john") → "Hello, John!"

hello("aliCE") → "Hello, Alice!"

hello("") → "Hello, World!"
*/
function hello(name) {
    if (!name) {
        return "Hello, World!";
    }

    const formattedName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    return `Hello, ${formattedName}!`;
}