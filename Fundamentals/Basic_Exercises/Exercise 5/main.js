

let month = parseInt(prompt("Type the number of a month 1-12"));


switch (month) {
    case 1: // January
    case 3: // March
    case 5: // May
    case 7: // July
    case 8: // August
    case 10: // October
    case 12: // December
        alert("This month has 31 days.");
        break;

    case 4: // April
    case 6: // June
    case 9: // September
    case 11: // November
        alert("This month has 30 days.");
        break;

    case 2: // February
        alert("February has 28 days, or 29 days in a leap year");
        break;

    default:
        alert("Use a number between 1 and 12!!!");
        break;
}