function getDif(index:number, difs=[]):number{
    if (index in difs) return difs[index]
    if (index < 4){
        return 0
    } if (index === 4){
        return 1
    }
    difs[index] = getDif(index-1, difs) + getDif(index-2, difs) + index - 3
    return difs[index]
}

function climbStairs(n: number): number {
    return getDif(n) + n
};