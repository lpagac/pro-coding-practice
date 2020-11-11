/** accepts a positive integer and returns an array of all divisors for that integer */

function allDivisors(positiveInteger) {
    // if the number passed is negative or a float => return alert statement
    if (positiveInteger <= 0 || positiveInteger % 1 !== 0) {
        return "Please provide a positive, whole number.";
    }
    const divisors = [];
    for (let i = 1; i <= positiveInteger; i++) {
        // if number has 0 left over after dividing push it to the divisors array
        if (positiveInteger % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}