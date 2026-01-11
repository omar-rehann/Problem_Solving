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