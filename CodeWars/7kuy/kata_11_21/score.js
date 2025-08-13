/*
You are working at a lower league football stadium and you've been tasked with automating the scoreboard.

The referee will shout out the score, you have already set up the voice recognition module which turns the ref's voice into a string, but the spoken score needs to be converted into a pair for the scoreboard!

e.g. "The score is four nil" should return [4,0]

Either teams score has a range of 0-9, and the ref won't say the same string every time e.g.

"new score: two three"
  
"two two"
  
"Arsenal just conceded another goal, two nil"


*/
function scoreboard(string) {
    let words = string.split(" ");
    let scores = [];

    for (let word of words) {
        switch (word) {
            case "nil":
            case "zero":
                scores.push(0);
                break;
            case "one":
                scores.push(1);
                break;
            case "two":
                scores.push(2);
                break;
            case "three":
                scores.push(3);
                break;
            case "four":
                scores.push(4);
                break;
            case "five":
                scores.push(5);
                break;
            case "six":
                scores.push(6);
                break;
            case "seven":
                scores.push(7);
                break;
            case "eight":
                scores.push(8);
                break;
            case "nine":
                scores.push(9);
                break;
        }
    }

    return scores;
}

// اختبارات
console.log(scoreboard("The score is four nil")); // [4, 0]
console.log(scoreboard("Arsenal two Manchester three")); // [2, 3]