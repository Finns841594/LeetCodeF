function twoSum(nums: number[], target: number): number[] {
    const tempMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (tempMap.has(target - nums[i])) {
            return [tempMap.get(target - nums[i]), i]
        }
        tempMap.set(nums[i],i)
    }
    return [-1,-1]
};