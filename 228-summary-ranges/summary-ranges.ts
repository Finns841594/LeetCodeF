function findNextGap(startIndex:number, array:number[]):number[] {
    for (let i = startIndex; i < array.length; i++) {
        if (array[i+1]-array[i] != 1){
            return [array[i], i]
        }
    }
}

function summaryRanges(nums: number[]): string[] {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i+1] == nums[i] + 1) {
            let slice = nums[i].toString() + '->'
            const [endNumber, endNumberIndex] = findNextGap(i+1, nums)
            result.push(slice+endNumber.toString())
            i = endNumberIndex
        } else {
            result.push(nums[i].toString())
        }
    }
    return result
};