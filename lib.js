function devide() {
    console.log("------------------------------------------------------")
}

function greeting(name, timeOfDay) {
    return `Hello ${name}. Have a great ${timeOfDay}`;
}

function fahrToCels(fahrTemp) {
    let celsius = (fahrTemp - 32) * 5/9;
    return celsius;
}

function heronsFormula(a, b, c) {
    let s = (a + b + c)/2;
    let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
    return area;
}

function heightCheck(height) {
    if (height < 82) {
        return "Too short for ride"
    } else {
        return "All Aboard!"
    }
}

function analyzeNumber(number) {
    if (number > 0) {
        return "positive"
    } else if (number < 0) {
        return "negative"
    } else if (number == 0) {
        return "zero"
    }
}

function gradeFeedback(grade) {
    if (grade >= 80) {
        return "Good job";
    } else if (grade >= 50) {
        return "Passable"
    } else {
        return "Keep trying"
    }
}

function abs(number) {
    if (number >= 0) {
        return number
    } else if (number < 0) {
        return -number
    }
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isDivisibleBy(number, divisor) {
    if (number % divisor === 0) {
        return true;
    } else {
        return false;
    }
}

function pointLocation(x, y) {
    if (x === 0 && y === 0) {
        return "origin";
    } else if (x === 0 && y != 0) {
        return "y-axis";
    } else if (x != 0 && y === 0) {
        return "x-axis"
    } else if ( x > 0 && y > 0) {
        return "quadrant I"
    } else if ( x < 0 && y > 0 ) {
        return "quadrant II"
    } else if ( x < 0 && y < 0) {
        return "quadrant III"
    } else if ( x > 0 && y < 0) {
        return "quadrant IV"
    }
}

function ordinalAdjective(number) {
    if (number === 1) {
        return `${number}st`
    } else if (number === 2) {
        return `${number}nd`
    } else if (number === 3) {
        return `${number}rd`
    } else {
        return `${number}th`
    }
}

function minPayment(balance) {
    let min = 0.021*balance;

    if (min > 10) {
        return min;
    } else if (balance > 10) {
        return 10;
    } else {
        return balance;
    }
}