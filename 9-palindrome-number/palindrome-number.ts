function isPalindrome(x: number): boolean {
    let xString = x.toString()
    let i = 0
    let j = xString.length - 1
    while(xString[i] === xString[j]){
        if (i === j - 1 || i === j) {
            return true
        }
        i++
        j--
    }
    return false
};