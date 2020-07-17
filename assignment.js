/** Feet to Mile calculation. 1 Mile = 1760 Gauze. 1 Gauze = 36 inch
So, 1 Mile = 1760 * 3 = 5280 Feet */
function feetToMile(feet) {
    var result = feet / 5280;
    if (feet < 0) {
        return "Distance can not be Negative.";
    }
    return result;
}

/** Wood Calculation for Nielsen Furniture Company. 
 1 Chair = 1 Cubic Feet;
 1 Table = 3 Cubic Feet;
 1 bed = 5 Cubic Feet;
 */

function woodCalculator(chair, table, bed) {
    var totalWood = (chair * 1) + (table * 3) + (bed * 5)
    if (chair < 0 || table < 0 || bed < 0) {
        return "Please enter positive value to calculate total amount of wood.";
    }
    else {
        return totalWood;
    }
}

/** Wood Calculation for Nielsen Furniture Company. 
Floor Size: 1 to 10 is 15 Feet;
Floor Size: 11 to 20 is 12 Feet;
Floor Size: 21 to Above is 10 Feet
Per Feet Bricks: 1000 pcs;
 */

function brickCalculator(buidingFloor) {
    var totalBrick = 0;
    var oneToTenHeight = 10 * 15 * 1000;
    var elevenToTwentyHeight = oneToTenHeight + (10 * 12 * 1000);
    var twentyOneToAbove = elevenToTwentyHeight + (10 * 1000 * (buidingFloor-20));

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

/** 
 * Find the Small name in an array
 */

function tinyFriend(friendName) {
    var tiny = friendName[0];
    if (friendName.length == 0) {
        return "Friend name is empty."
    }
    for (var i = 0; i < friendName.length; i++) {
        if (tiny.length > friendName[i].length) {
            tiny = friendName[i];
        }
    }
    return tiny
}