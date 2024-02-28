function twoSum(numbers: number[], target: number): number[] {
    let small = 0
    let big = numbers.length - 1
    while (small < big) {
        if (numbers[small] + numbers[big] > target) {
            big--
        } else if (numbers[small] + numbers[big] < target) {
            small++
        } else {
            return [small+1,big+1]
        }
    }
};