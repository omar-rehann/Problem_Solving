/*

Problem: Minimum Score of a Path Between Two Cities

You are given an integer n representing the number of cities, labeled from 1 to n, and a 2D array roads, where each element roads[i] = [ai, bi, distancei] indicates a bidirectional road between cities ai and bi with a distance of distancei.

The score of a path between city 1 and city n is defined as the minimum distance of any road used along that path.

Return the minimum possible score of a path between city 1 and city n.

Constraints:

There is at least one path between city 1 and city n.

Roads are bidirectional.

Multiple roads between the same cities may exist.

That’s it — problem statement only 👍
*/
function minScore(n, roads) {
    let min = Infinity;

    for (let i = 0; i < roads.length; i++) {
        let distance = roads[i][2];
        if (distance < min) {
            min = distance;
        }
    }

    return min;
}