function twoSum(numbers: number[], target: number): number[] {
    let small = 0
    let big = numbers.length - 1
    while (small < big) {
        let sum = numbers[small] + numbers[big]
        if (sum === target) {
            return [small+1,big+1]
        } else if (sum < target) {
            small++
        } else {
            big--
        }
    }
};