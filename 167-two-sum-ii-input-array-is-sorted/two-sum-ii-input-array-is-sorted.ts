function twoSum(numbers: number[], target: number): number[] {
    for (let i = 0; i < numbers.length; i++) {
        const dis = target - numbers[i]
        let j = i+1
        while (numbers[j] <= dis) {
            if (numbers[j] === dis) {
                return [i+1,j+1]
            }
            j++
        }
    }
};