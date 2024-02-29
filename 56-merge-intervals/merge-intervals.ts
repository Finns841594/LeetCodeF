function mergeTwo(intervalOne: number[], intervalTwo: number[]):number[] {
    if (intervalOne[1] < intervalTwo[0]) {
        return undefined // not merging
    } else if (intervalOne[1] > intervalTwo[1]) {
        return intervalOne
    } else {
        return [intervalOne[0],intervalTwo[1]]
    }
}

function merge(intervals: number[][]): number[][] {
    const sortedIntervals = intervals.sort((a,b) => a[0]-b[0])
    let result = [sortedIntervals[0]]
    for (let i = 1; i < sortedIntervals.length; i++) {
        const mergedByTwo = mergeTwo(result[result.length - 1], sortedIntervals[i])
        if (mergedByTwo) {
            result[result.length - 1] = mergedByTwo
        } else {
            result.push(sortedIntervals[i])
        }

    }
    return result
};