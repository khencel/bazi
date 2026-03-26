export function ConvertMonthIntoText(month: number){
    switch (month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
        default:
            return "";
    }
}

export function AnimalSign(animal: string){
    switch (animal){
        case "Rat":
            return "🐀";
        case "Ox":
            return "🐂";
        case "Tiger":
            return "🐅";
        case "Rabbit":
            return "🐇";
        case "Dragon":
            return "🐉";
        case "Snake":
            return "🐍";
        case "Horse":
            return "🐎";
        case "Goat":
            return "🐐";
        case "Monkey":
            return "🐒";
        case "Rooster":
            return "🐓"
        case "Dog":
            return "🐕";
        case "Pig":
            return "🐖";
        default:
            return "";
    }
}

export function convertInitailLetter(str: string){
    if (!str) return "";
    return str.split(" ").map(word => word.charAt(0).toUpperCase()).join("");
}