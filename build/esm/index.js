function generateOTP(digits = 4) {
    digits = Math.min(digits, 20);
    const max = +('9'.repeat(digits));
    let number = Math.floor(Math.random() * max).toString();
    number = '0'.repeat(digits - number.length) + number;
    return number;
}
export { generateOTP };
