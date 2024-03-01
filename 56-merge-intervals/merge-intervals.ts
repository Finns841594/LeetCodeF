function merge(intervals: number[][]): number[][] {
    const sortedIntervals = intervals.sort((a,b) => a[0]-b[0])
    let result = []
    let start = sortedIntervals[0][0]
    let end = sortedIntervals[0][1]
    for (let interval of sortedIntervals) {
        if (interval[0] <= end) {
            // in the case of merging
            end = Math.max(interval[1], end)
        } else {
            // in the case of not merging, move on to next start-end pair
            result.push([start, end])
            start = interval[0]
            end = interval[1]
        }
    }
    // put in the last pair
    result.push([start,end])
    
    return result
};