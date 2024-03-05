function isHappy(n: number): boolean {
    if (n === 1 || n === 7) {
        return true
    } else if (n>1 && n<10) {
        return false
    }
    let sum = 0
    const digitArray = n.toString().split('')
    digitArray.forEach(item => sum = sum + Number(item)*Number(item))
    return isHappy(sum)
};