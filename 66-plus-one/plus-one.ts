function plusOne(digits: number[]): number[] {
    let lastIndex = digits.length - 1
    for (let i = lastIndex; i >= 0; i--){
        if (digits[i]<9){
            digits[i]++
            return digits
        }
        digits[i]=0
    }
    digits.unshift(1)
    return digits
};