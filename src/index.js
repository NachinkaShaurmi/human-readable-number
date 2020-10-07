module.exports = function toReadable (number) {
    const to19 = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
    "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]; 

    const to99 = [null, null, "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];

    let answer = "";

    if (number < 20) return to19[number];
    if (number >= 20 && number < 100) {
        if (number % 10 === 0) return to99[number / 10];
        else return `${to99[Math.floor(number / 10)]} ${to19[Math.floor(number % 10)]}`;
    }
    if (number >= 100) {
        answer = `${to19[Math.floor(number / 100)]} hundred`;
        if (number % 100 === 0) return answer;
        if (number % 100 < 20) answer += " " + to19[number % 100];
        if (number % 100 >= 20) {
            if (number % 100 % 10 === 0) answer += " " + to99[number % 100 / 10];
            else answer += ` ${to99[Math.floor(number % 100 / 10)]} ${to19[Math.floor(number % 100 % 10)]}`;
        }
    }
    return answer;
}
