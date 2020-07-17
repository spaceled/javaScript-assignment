/** Feet to Mile calculation. 1 Mile = 1760 Gauze. 1 Gauze = 36 inch
So, 1 Mile = 1760 * 3 = 5280 Feet */
function feetToMile(feet) {
    var result = feet / 5280;
    return result;
}


/** Wood Calculation for Nielsen Furniture Company. 
 1 Chair = 1 Cubic Feet;
 1 Table = 3 Cubic Feet;
 1 bed = 5 Cubic Feet;
 */

function woodCalculator(chair, table, bed) {
    var totalWood = ((chair * 1) + (table * 3) + (bed * 5))
    return totalWood;
}
// var result = woodCalculator(5, 10, 3);
// console.log(result);


/** Wood Calculation for Nielsen Furniture Company. 
 1 Chair = 1 Cubic Feet;
 1 Table = 3 Cubic Feet;
 1 bed = 5 Cubic Feet;
 */

function brickCalculator(buidingFloor) {
    var totalBrick = 0;
    var oneToTenHeight = 10 * 15 * 1000;
    var elevenToTwentyHeight = oneToTenHeight + (10 * 12 * 1000);
    var twentyOneToAbove = oneToTenHeight + elevenToTwentyHeight + (10 * 1000 * (buidingFloor-20));

    if (buidingFloor < 0) {
        return "Building height Can not be Negative";
    }

    if (buidingFloor > 0) {
        if (buidingFloor <= 10) {
            totalBrick = (buidingFloor * 15) * 1000; 
        }
        else if (buidingFloor > 10 && buidingFloor <= 20) {
            totalBrick = oneToTenHeight + ((buidingFloor - 10) * 12) * 1000; 
        }
        else {
            totalBrick = twentyOneToAbove; 
        }
    }
    return totalBrick;
}
var res = brickCalculator(22);
console.log(res);
