/*


### 5. Grasshopper - Personalized Message
 * Problem Description: Create a function that gives a personalized greeting. This function takes two parameters: name and owner. Use conditionals to return the proper message:
   * If name === owner, return 'Hello boss'.
   * Otherwise, return 'Hello guest'.
 * Solution:
*/

// 7 kata
function greet(name, owner) {
    return name === owner ? 'Hello boss' : 'Hello guest';
}