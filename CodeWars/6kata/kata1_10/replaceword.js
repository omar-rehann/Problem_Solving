/*
Task
You're given a sentence, where each word has different length. Swap the longest word with the shortest one, the 2nd shortest word with the 2nd longest one, and so on.

Note that the resulting sentence should be correct, i.e. it should be capitalized and all words but the first one should contain only lowercase letters (except the word "I").

Input/Output
[input] string sentence
A string of English letters and whitespace characters.
0 < sentence.length <= 20.

[output] a string
Correct sentence with words replaced. It should be capitalized and all words but the first one should contain only lowercase letters (except the word "I").

Examples
For sentence = "I am the best", the output should be "Best the am I"

The word "I" and word "best" exchanged their positions; The word "am" and word "the" exchanged their positions.

For sentence = "I am better than him", the output should be "Better than I am him"

The word "I" and word "better" exchanged their positions; The word "am" and word "than" exchanged their positions; The middle length word "him" remain in its original position.

Fundamentals
Ad
Find out the role of AI in your Codewars journey written by Cofounder, Jake Hoffner
Codewarriors, its time to learn about AI and your learning journey Read here



*/


function replaceWords(sentence) {
    let test = sentence.split(" "); // تفصل الجملة لكلمات
    let z = [];
    let result = test.map((e, i) => ({ word: e, len: e.length, index: i }));
    // تخزن الكلمة مع طولها ومعاها الـ index بتاعها

    let left = 0;
    let right = result.length - 1;

    // ترتيب حسب الطول
    result.sort((a, b) => a.len - b.len);

    while (left <= right) {
        if (left == right) {
            z.push(result[left].word); // هات الكلمة نفسها
        } else {
            z.push(result[right].word); // الأطول
            z.push(result[left].word); // الأقصر
        }
        left++;
        right--;
    }
    let final = z.join(" ");
    return final.slice(0, 1).toUpperCase() + final.slice(1)
}

console.log(replaceWords("I am better than him"));