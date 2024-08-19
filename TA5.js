function leapYears (year) {
    if (year % 4 === 0) {
        return "Es bisiesto"
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return "Es bisiesto"
    }
    else {
        return "No es bisiesto"
    }
}

console.log(leapYears(2024))
console.log(leapYears(2023))
console.log(leapYears(2020))