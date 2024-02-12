function plusOneByIndex(digits: number[],index:number): number[]{
    if (digits[index] < 9){
        digits[index] = digits[index] + 1
        return digits
    } else if (index === 0) {
        digits[index] = 0
        digits.unshift(1)
        return digits
    }
    digits[index] = 0
    return plusOneByIndex(digits, index-1)
}

function plusOne(digits: number[]): number[] {
    return plusOneByIndex(digits,digits.length-1)
};