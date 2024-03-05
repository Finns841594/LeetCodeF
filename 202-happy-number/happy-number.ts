function isHappyMemo(n:number, sums:number[]):boolean {
    if (sums[sums.length-1] === 1) return true
    if (n in sums) return false

    let sum = 0
    const digitArray = n.toString().split('')
    digitArray.forEach(item => sum = sum + Number(item)*Number(item))
    sums.push(sum)
    return isHappyMemo(sum, sums)
}

function isHappy(n: number): boolean {
    return isHappyMemo(n,[])
};