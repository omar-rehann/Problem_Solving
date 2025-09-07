/*

You receive the direction you are facing (one of the 8 directions: N, NE, E, SE, S, SW, W, NW) and a certain degree to turn (a multiple of 45, between -1080 and 1080); positive means clockwise, and negative means counter-clockwise.

Return the direction you will face after the turn.

*/
function direction(facing, turn) {
    // نخلي الدرجات بين 0 و 360
    turn = ((turn % 360) + 360) % 360;

    switch (facing) {
        case "N":
            switch (turn) {
                case 0:
                    return "N";
                case 45:
                    return "NE";
                case 90:
                    return "E";
                case 135:
                    return "SE";
                case 180:
                    return "S";
                case 225:
                    return "SW";
                case 270:
                    return "W";
                case 315:
                    return "NW";
            }
            break;

        case "NE":
            switch (turn) {
                case 0:
                    return "NE";
                case 45:
                    return "E";
                case 90:
                    return "SE";
                case 135:
                    return "S";
                case 180:
                    return "SW";
                case 225:
                    return "W";
                case 270:
                    return "NW";
                case 315:
                    return "N";
            }
            break;

        case "E":
            switch (turn) {
                case 0:
                    return "E";
                case 45:
                    return "SE";
                case 90:
                    return "S";
                case 135:
                    return "SW";
                case 180:
                    return "W";
                case 225:
                    return "NW";
                case 270:
                    return "N";
                case 315:
                    return "NE";
            }
            break;

        case "SE":
            switch (turn) {
                case 0:
                    return "SE";
                case 45:
                    return "S";
                case 90:
                    return "SW";
                case 135:
                    return "W";
                case 180:
                    return "NW";
                case 225:
                    return "N";
                case 270:
                    return "NE";
                case 315:
                    return "E";
            }
            break;

        case "S":
            switch (turn) {
                case 0:
                    return "S";
                case 45:
                    return "SW";
                case 90:
                    return "W";
                case 135:
                    return "NW";
                case 180:
                    return "N";
                case 225:
                    return "NE";
                case 270:
                    return "E";
                case 315:
                    return "SE";
            }
            break;

        case "SW":
            switch (turn) {
                case 0:
                    return "SW";
                case 45:
                    return "W";
                case 90:
                    return "NW";
                case 135:
                    return "N";
                case 180:
                    return "NE";
                case 225:
                    return "E";
                case 270:
                    return "SE";
                case 315:
                    return "S";
            }
            break;

        case "W":
            switch (turn) {
                case 0:
                    return "W";
                case 45:
                    return "NW";
                case 90:
                    return "N";
                case 135:
                    return "NE";
                case 180:
                    return "E";
                case 225:
                    return "SE";
                case 270:
                    return "S";
                case 315:
                    return "SW";
            }
            break;

        case "NW":
            switch (turn) {
                case 0:
                    return "NW";
                case 45:
                    return "N";
                case 90:
                    return "NE";
                case 135:
                    return "E";
                case 180:
                    return "SE";
                case 225:
                    return "S";
                case 270:
                    return "SW";
                case 315:
                    return "W";
            }
            break;
    }

    return "Invalid";
}

// أمثلة للتجربة
console.log(direction("N", 90)); // E
console.log(direction("SW", 180)); // NE
console.log(direction("E", -450)); // N