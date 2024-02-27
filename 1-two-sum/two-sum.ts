function twoSum(nums: number[], target: number): number[] {
    const result = []
    for (let i = 0; i < nums.length; i++) {
        result.push(i)
        const dis = target -  nums[i]
        let j = i + 1
        while (j < nums.length) {
            if (nums[j] === dis) {
                result.push(j)
                return result
            }
            j++
        }
        result.pop()
    }
};