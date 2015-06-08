/**
 * Get a random number to zero decimal places
 *
 * @limit {Number} The max random number 
 * @return {Number} Random number between zero and provided limir
 */
export function getRandomNumber(limit) {
    var num = Math.random()*limit; 
    return num.toFixed(0);
}

/**
 * Use Pythagoras to find the distance between two points
 *
 * @param p1 {Object} First point with x and y coordinates
 * @param p2 {Object} Second point with x and y coordinates
 * @return {Number} Distance between two points
 */
export function getDistance(p1, p2) {
    var a = p1.x -p2.x;
    var b = p1.y -p2.y;
    
    return Math.sqrt( a*a + b*b ).toFixed(0);
}


