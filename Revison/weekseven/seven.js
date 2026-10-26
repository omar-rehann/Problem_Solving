/*

1. Holiday VI - Shark Pontoon

Determine whether you reach the pontoon before the shark reaches you, based on distance and speed.
*/
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed) {
    const youTime = pontoonDistance / youSpeed;
    const sharkTime = sharkDistance / sharkSpeed;
    return youTime < sharkTime ? "Alive!" : "Shark Bait!";
}