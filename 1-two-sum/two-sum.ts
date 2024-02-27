function twoSum(nums: number[], target: number): number[] {
    const tempMap = new Map()
    for (let i = 0; i < nums.length; i++) {
        const dis = target - nums[i]
        if (tempMap.has(dis)) {
            return [i, tempMap.get(dis)]
        }
        tempMap.set(nums[i],i)
    }
    return [-1,-1]
};