/*Problem:
Given a string containing several words, each word includes a single number (from 1 to 9) that indicates its correct position in the ordered sentence. Your task is to return the words sorted according to these numbers.
If the input string is empty, return an empty string.



*/
function yourorder(string) {
    let test = string.split(" ");
    let z = [];

    // استخراج الأرقام من كل كلمة
    for (let i = 0; i < test.length; i++) {
        let word = test[i];
        for (let j = 0; j < word.length; j++) {
            if (!isNaN(word[j]) && word[j] !== " ") {
                // نضيف object فيه الكلمة ورقمها
                z.push({ num: Number(word[j]), word: word });
            }
        }
    }

    // نرتب بناء على الرقم
    let soort = z.sort((a, b) => a.num - b.num);

    // نطلع الكلمات المرتبة
    let final = soort.map(function(e) {
        return e.word;
    });

    return final.join(" ");
}

console.log(yourorder("nasse2er omar1 al3i has4san reha6n"));