function fn(n: number): number { 
    if (n < 5) return 0
    return fn(n/5) + Math.floor(n/5)
}

function trailingZeroes(n: number): number {
    return fn(n)
};