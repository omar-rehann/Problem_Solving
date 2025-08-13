/*
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1


*/
function correct(string) {
    let test = Array.from(string);
    let one = test.map(function(e) {
        switch (e) {
            case "5":
                return "S";
            case "1":
                return "I";
            case "0":
                return "O";
            default:
                return e;
        }
    }).join("");
    return one;
}
console.log(correct("omar "))