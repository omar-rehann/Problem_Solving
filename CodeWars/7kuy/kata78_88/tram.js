/*
Linear Kingdom has exactly one tram line. It has n stops, numbered from 1 to n in the order of tram's movement. At the i-th stop ai passengers exit the tram, while bi passengers enter it. The tram is empty before it arrives at the first stop.

Your task
Calculate the tram's minimum capacity such that the number of people inside the tram never exceeds this capacity at any time. Note that at each stop all exiting passengers exit before any entering passenger enters the tram.
*/
/*
Linear Kingdom Tram Problem
*/
function tram(stops, descending, onboarding) {
    if (descending.length > stops || onboarding.length > stops) {
        return 0;
    } else {
        let current = 0;
        let max = 0;

        for (let i = 0; i < stops; i++) {
            current -= descending[i]; // اللي نزلوا
            current += onboarding[i]; // اللي ركبوا

            if (current > max) {
                max = current;
            }
        }

        return max;
    }
}

// Example
console.log(tram(4, [0, 2, 4, 4], [3, 5, 2, 0])); // output: 6