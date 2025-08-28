function removeVowels(str) {
    if (typeof str !== 'string') {
        console.warn(Warning: Invalid input '${str}'.Expected a string.Returning an empty string.);
        return "";
    }
    const vowelsToRemove = ['a', 'i', 'o', 'e', 'u', 'y'];
    const resultCharacters = Array.from(str).filter(function(char) {
        return !vowelsToRemove.includes(char.toLowerCase());
    });

    return resultCharacters.join("");
}

console.log("Original string: 'omar'");
console.log("String with vowels removed:", removeVowels("omar")); // Expected: "mr" (o, a are removed)