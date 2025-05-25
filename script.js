function firstNonRepeatedChar(str) {
    const charCount = {};

    // Count the frequency of each character
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find and return the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 