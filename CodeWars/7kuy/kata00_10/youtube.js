/*
Story
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.
*/
function likeOrDislike(buttons) {
    let state = "Nothing"; // الحالة الابتدائية

    for (let action of buttons) {
        if (state === action) {
            // لو ضغطت نفس الزر اللي مفعّل → يلغيه
            state = "Nothing";
        } else {
            // لو ضغطت زر مختلف → يستبدل الحالي
            state = action;
        }
    }

    return state;
}

// أمثلة
console.log(likeOrDislike(["Dislike"])); // Dislike
console.log(likeOrDislike(["Like", "Like"])); // Nothing
console.log(likeOrDislike(["Dislike", "Like"])); // Like
console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); // Nothing