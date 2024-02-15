function hammingWeight(n: number): number {
    const binaryArray = n.toString(2).split('')
    let count = 0
    for (let i = 0; i<binaryArray.length;i++){
        if (binaryArray[i]==='1'){
            count++
        }
    }
    return count
};