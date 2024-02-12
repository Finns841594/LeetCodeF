function plusOne(digits: number[]): number[] {
    let isAddingTen = false
    const lastIndex = digits.length - 1
    digits[lastIndex] = digits[lastIndex] + 1
    if (digits[lastIndex] > 9) {
        digits[lastIndex] = 0
        if  (lastIndex === 0 ){
            digits.unshift(1)
            return digits
        }
        // forward adding one until no more than 10
        for (let i = lastIndex - 1; i >= 0; i--){
            digits[i] = digits[i] + 1
            if (digits[i] > 9 && i === 0) {
                digits[i] = 0
                digits.unshift(1)
            } else if (digits[i] > 9) {
                digits[i] = 0
            }else {
                return digits
            }
        }
    }
    return digits
};