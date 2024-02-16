function removeItemFromArrayInPlace(arr: number[], item: number) {
    let index = arr.indexOf(item)
    arr.splice(index,1)
}

function singleNumber(nums: number[]): number {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        if (result.includes(nums[i])){
            removeItemFromArrayInPlace(result, nums[i])
        } else {
            result.push(nums[i])
        }
    }
    return result[0]
};