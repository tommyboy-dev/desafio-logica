let nickname = "Tommyboy"; //*Insert your nickname
let xpAmount = "10250"; // *Insert your xp amount
let level = ""; // Variable to store the switch case result

switch (true) {

    case (xpAmount < 1000):
        level = "Iron";
        break;

    case (xpAmount >= 1001 && xpAmount <= 2000):
        level = "Bronze";
        break;

    case (xpAmount >= 2001 && xpAmount <= 3000):
        level = "Silver";
        break;

    case (xpAmount >= 3001 && xpAmount <= 4000):
        level = "Gold";
        break;

    case (xpAmount >= 4001 && xpAmount <= 6000):
        level = "Platinum";
        break;

    case (xpAmount >= 6001 && xpAmount <= 8000):
        level = "Diamond";
        break;

    case (xpAmount >= 8001 && xpAmount <= 9000):
        level = "Ascendant";
        break;

    case (xpAmount >= 9001 && xpAmount <= 10000):
        level = "Immortal";
        break;

    case (xpAmount >= 10001):
        level = "Radiant";
        break;

    default:
        level = "nonexistent";

}

// Display the final message

console.log("The hero " + nickname + " has level " + level);